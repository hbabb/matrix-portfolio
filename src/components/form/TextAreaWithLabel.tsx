"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { TextareaHTMLAttributes } from "react";

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  className?: string;
  placeholder?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaWithLabel<S>({
  fieldTitle,
  nameInSchema,
  className,
  placeholder,
  ...props
}: Props<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className="mb-2 font-shareTech text-base text-matrix-brightGreen"
            htmlFor={nameInSchema}
          >
            {fieldTitle}
          </FormLabel>

          <FormControl>
            <Textarea
              id={nameInSchema}
              className={`resize-vertical min-h-40 border-matrix-medGreen bg-matrix-black font-firaCode text-matrix-neonGreen placeholder:text-matrix-neonGreen/50 focus:border-matrix-brightGreen focus:ring-1 focus:ring-matrix-brightGreen ${className}`}
              placeholder={placeholder}
              {...props}
              {...field}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
