import { MatrixHeader } from '@/components/layout/MatrixHeader';
import { MatrixFooter } from '@/components/layout/MatrixFooter';

export default function SystemMainframeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col">
      <MatrixHeader />
      <section className="flex-1 pt-16 pb-16">
        {children}
      </section>
      <MatrixFooter />
    </main>
  );
}
