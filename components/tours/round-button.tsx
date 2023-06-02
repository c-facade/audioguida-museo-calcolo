import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-neutral-800',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-900 text-white hover:bg-neutral-700',
      },
      size: {
        default: 'h-20 w-20',
        md: 'h-12 w-12',
        sm: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const RoundButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
RoundButton.displayName = 'RoundButton';

export { RoundButton, buttonVariants };
