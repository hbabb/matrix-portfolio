import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as Sentry from "@sentry/nextjs";
import { rateLimit } from "@/lib/rateLimit";
import { ContactFormEmail } from "@/components/emails/contactFormEmail";
import { contactFormSchema } from "@/schema/contactForm";
import { headers } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const headersList = await headers();
  const ip = (headersList.get("x-forwarded-for") || "unknown").split(",")[0];

  try {
    // Rate limiting check - 5 requests per minute per IP
    if (!rateLimit(ip, 5)) {
      const rateLimitError = new Error("Rate limit exceeded");
      Sentry.captureException(rateLimitError, {
        tags: {
          location: "contact_api",
          errorType: "rate_limit",
          ip,
        },
      });
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    // CORS check
    const origin = headersList.get("origin");
    if (!origin || !process.env.ALLOWED_ORIGINS?.includes(origin)) {
      const corsError = new Error("Invalid origin");
      Sentry.captureException(corsError, {
        tags: {
          location: "contact_api",
          errorType: "cors",
          origin,
        },
      });
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    // Content type check
    const contentType = headersList.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 },
      );
    }

    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.safeParse(body);

    if (!validatedData.success) {
      throw new Error("Invalid form data");
    }

    const { name, email, message } = validatedData.data;

    // Honeypot check if you have a hidden field
    if (body.honeypot) {
      const honeypotError = new Error("Honeypot triggered");
      Sentry.captureException(honeypotError, {
        tags: {
          location: "contact_api",
          errorType: "honeypot",
          ip,
        },
      });
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Additional spam checks
    const spamPhrases = ["casino", "viagra", "buy now", "click here"];
    if (spamPhrases.some((phrase) => message.toLowerCase().includes(phrase))) {
      const spamError = new Error("Spam detected");
      Sentry.captureException(spamError, {
        tags: {
          location: "contact_api",
          errorType: "spam",
          ip,
        },
      });
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [process.env.CONTACT_EMAIL!],
      subject: `New Contact Form Submission from ${name}`,
      react: ContactFormEmail({ name, email, message }),
    });

    if (error) {
      Sentry.captureException(error, {
        extra: {
          name,
          email,
          messageLength: message.length,
          resendError: error,
        },
        tags: {
          location: "contact_api",
          service: "resend",
          errorType: "email_send_failure",
        },
      });

      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      },
    );
  } catch (error) {
    Sentry.captureException(error, {
      extra: { rawBody: request.body },
      tags: {
        location: "contact_api",
        errorType: error instanceof Error ? error.name : "unknown",
        ip,
      },
    });

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}

// Add CORS headers to OPTIONS request
/* @typescript-eslint/no-unused-vars */
export async function OPTIONS(request: NextRequest) {
  const allowedOrigins = process.env.ALLOWED_ORIGINS ?? "";

  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigins,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
}
