import { create } from "zustand";
import * as Sentry from "@sentry/nextjs";
import { toast } from "sonner";
import { contactFormSchemaType } from "@/schema/contactForm";

interface ContactFormState {
  isSubmitting: boolean;
  submitError: string | null;
  // Form state
  formData: contactFormSchemaType;
  // Actions
  setIsSubmitting: (isSubmitting: boolean) => void;
  setSubmitError: (error: string | null) => void;
  setFormData: (data: Partial<contactFormSchemaType>) => void;
  resetForm: () => void;
  submitForm: (data: contactFormSchemaType) => Promise<void>;
}

const initialFormData: contactFormSchemaType = {
  name: "",
  email: "",
  message: "",
};

/* @typescript-eslint/no-unused-vars */
export const useContactStore = create<ContactFormState>((set, get) => ({
  isSubmitting: false,
  submitError: null,
  formData: initialFormData,

  setIsSubmitting: (isSubmitting) => set({ isSubmitting }),
  setSubmitError: (error) => set({ submitError: error }),
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
  resetForm: () => set({ formData: initialFormData }),

  submitForm: async (data: contactFormSchemaType) => {
    set({ isSubmitting: true, submitError: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to send message");
      }

      toast.success("Message sent successfully!");
      set({ formData: initialFormData });
    } catch (error) {
      const isResendError =
        error instanceof Error && error.message.includes("Resend");

      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.";

      Sentry.captureException(error, {
        extra: {
          formData: {
            name: data.name,
            email: data.email,
            messageLength: data.message.length,
          },
        },
        tags: {
          location: "contact_form",
          action: "submit",
          errorType: isResendError ? "resend_error" : "api_error",
        },
        level: isResendError ? "error" : "warning",
      });

      set({ submitError: errorMessage });
      toast.error(errorMessage);
    } finally {
      set({ isSubmitting: false });
    }
  },
}));
