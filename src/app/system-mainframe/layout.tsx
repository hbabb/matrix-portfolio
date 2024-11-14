import { MatrixHeader } from '@/components/layout/MatrixHeader';
import { MatrixFooter } from '@/components/layout/MatrixFooter';
import { Toaster } from 'sonner';

export default function SystemMainframeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col">
      <MatrixHeader />
      <section className="flex-1 pb-16 pt-16">
        {children}
        <Toaster />
      </section>
      <MatrixFooter />
    </main>
  );
}
