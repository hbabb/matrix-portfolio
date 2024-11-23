import ContactForm from "@/app/portfolio/system-mainframe/uplink/ContactForm";
import * as Sentry from "@sentry/nextjs";

export default function ContactFormPage() {
  try {
    return (
      <div className="container">
        <ContactForm />
      </div>
    );
  } catch (e) {
    if (e instanceof Error) {
      Sentry.captureException(e, {
        tags: {
          location: "contact_form",
          errorType: e.name,
        },
      });
      throw e;
    }
  }
}
