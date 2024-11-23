"use client";

import * as Sentry from "@sentry/nextjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import { InputWithLabel } from "@/components/form/InputWithLabel";
import { TextAreaWithLabel } from "@/components/form/TextAreaWithLabel";

import { useContactStore } from "@/stores/contactFormStore";
import {
  contactFormSchema,
  type contactFormSchemaType,
} from "@/schema/contactForm";

export default function ContactForm() {
  const { isSubmitting, submitForm } = useContactStore();

  const { toast } = useToast();

  const defaultValues: contactFormSchemaType = {
    name: "",
    email: "",
    message: "",
  };

  const form = useForm<contactFormSchemaType>({
    mode: "onBlur",
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  //   async function submitForm(data: contactFormSchemaType) {
  //     console.log(data);
  //   };

  return (
    <div className="mx-auto my-auto flex flex-col items-center justify-center p-4">
      <Card className="my-auto mt-10 w-full max-w-2xl border-2 border-matrix-medGreen bg-matrix-digitalBlack/90 text-lg shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-center font-anonymous text-2xl text-matrix-neonGreen">
            Establish Connection...
            <div className="animate-pulse">
              <div className="h-4 w-4 rounded-full bg-matrix-neonGreen"></div>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(async (data) => {
                try {
                  await submitForm(data);
                  toast({
                    title: "TRANSMISSION SUCCESSFUL",
                    description: "Message received by the system",
                    className: "bg-matrix-digitalBlack border-matrix-medGreen",
                    action: (
                      <ToastAction
                        altText="View Status"
                        className="hover:animate-matrix-glow border border-matrix-medGreen text-matrix-neonGreen"
                      >
                        View Status
                      </ToastAction>
                    ),
                  });
                } catch (e) {
                  if (e instanceof Error) {
                    Sentry.captureException(e, {
                      tags: {
                        location: "contact_form",
                        errorType: e.name,
                      },
                    });
                    toast({
                      variant: "destructive",
                      title: "TRANSMISSION FAILED",
                      description:
                        e instanceof Error
                          ? e.message
                          : "System error detected",
                      className: "bg-matrix-digitalBlack border-matrix-redPill",
                      action: (
                        <ToastAction
                          altText="Try again"
                          className="hover:animate-matrix-glow border border-matrix-redPill text-matrix-redPill"
                        >
                          Try again
                        </ToastAction>
                      ),
                    });
                  }
                }
              })}
              className="space-y-8"
            >
              <InputWithLabel
                fieldTitle="Name"
                nameInSchema="name"
                className="w-full"
                placeholder="Enter your name"
              />
              <InputWithLabel
                fieldTitle="Email"
                nameInSchema="email"
                className="w-full"
                placeholder="Enter your email"
              />
              <TextAreaWithLabel
                fieldTitle="Message"
                nameInSchema="message"
                className="w-full"
                placeholder="Enter your message"
              />
              <Button
                type="submit"
                className="hover:animate-matrix-glow w-full border border-matrix-medGreen bg-matrix-darkGreen font-anonymous text-matrix-neonGreen transition-all duration-300 hover:border-matrix-brightGreen hover:bg-matrix-medGreen disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-matrix-neonGreen border-t-transparent" />
                    <span>Transmitting...</span>
                  </div>
                ) : (
                  "Initiate Transmission"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
