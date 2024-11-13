import { cn } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

interface PillLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function RedPillLink({
  href,
  children,
  className,
  ...props
}: PillLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: 'redpill' }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}

export function BluePillLink({
  href,
  children,
  className,
  ...props
}: PillLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: 'bluepill' }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
