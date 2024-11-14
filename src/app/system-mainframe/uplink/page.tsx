'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContactStore } from '@/stores/contactFormStore';
import { contactFormSchema, type ContactFormData } from '@/schema/contactForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

export default function ContactForm() {
  const { isSubmitting, submitForm } = useContactStore();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    await submitForm(data);
    form.reset();
  };

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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-shareTech text-base text-matrix-brightGreen">Designation</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        disabled={isSubmitting}
                        className="border-matrix-medGreen bg-matrix-black font-firaCode text-matrix-neonGreen placeholder:text-matrix-medGreen/50 focus:border-matrix-brightGreen focus:ring-1 focus:ring-matrix-brightGreen"
                      />
                    </FormControl>
                    <FormMessage className="font-roboto text-matrix-redPill" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-shareTech text-matrix-brightGreen">Access Code</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                        disabled={isSubmitting}
                        className="border-matrix-medGreen bg-matrix-black font-firaCode text-matrix-neonGreen placeholder:text-matrix-medGreen/50 focus:border-matrix-brightGreen focus:ring-1 focus:ring-matrix-brightGreen"
                      />
                    </FormControl>
                    <FormMessage className="font-roboto text-matrix-redPill" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-shareTech text-matrix-brightGreen">Transmission</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        {...field}
                        disabled={isSubmitting}
                        className="min-h-[150px] resize-none border-matrix-medGreen bg-matrix-black font-firaCode text-matrix-neonGreen placeholder:text-matrix-medGreen/50 focus:border-matrix-brightGreen focus:ring-1 focus:ring-matrix-brightGreen"
                      />
                    </FormControl>
                    <FormMessage className="font-roboto text-matrix-redPill" />
                  </FormItem>
                )}
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
                  'Initiate Transmission'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
