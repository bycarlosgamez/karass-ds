import { ComponentProps, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = ComponentProps<'button'> & {
  variant?:
    | 'primary'
    | 'outlined'
    | 'destructive'
    | 'success'
    | 'neutral'
    | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode;
};

const buttonStyles = cva(
  'inline-flex items-center gap-1.5 font-semibold rounded-sm border transition-colors px-3 py-1.5 shadow-xs focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-teal-600 text-white border-transparent hover:bg-teal-700 active:bg-teal-800',
        outlined:
          'bg-white text-teal-700 border-slate-400 hover:bg-slate-100 active:bg-slate-200',
        destructive:
          'bg-red-600 text-white border-transparent hover:bg-red-700 active:bg-red-800',
        success:
          'bg-green-600 text-white border-transparent hover:bg-green-700 active:bg-green-800',
        neutral:
          'bg-blue-600 text-white border-transparent hover:bg-blue-700 active:bg-blue-800',
        ghost:
          'bg-transparent text-teal-600 border-transparent shadow-none hover:bg-slate-100 active:bg-slate-200',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      disabled: false,
    },
  }
);

export const Button = ({
  variant,
  size,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const buttonClassNames = twMerge(buttonStyles({ variant, size, disabled }));

  return (
    <button {...props} className={buttonClassNames} disabled={disabled}>
      {children}
    </button>
  );
};
