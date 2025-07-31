import React, { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outlined' | 'destructive' | 'success' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children: ReactNode;
}

const buttonStyles = cva(
  'px-4 py-2 rounded focus:outline-none cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-teal-600 text-white border border-teal-600 ',
        outlined: 'border border-gray-400 text-teal-600',
        destructive: 'bg-red-700 text-white border border-red-700',
        success: 'bg-green-600 text-white border border-green-600',
        neutral: 'bg-blue-500 text-white border borer blue-500',
      },
      size: {
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
      },
      disabled: {
        true: 'bg-gray-300 text-gray-600 cursor-not-allowed border border-gray-300',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
      disabled: false,
    },
  }
);

function Button({
  variant,
  size,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) {
  const mergedClassNames = twMerge(
    buttonStyles({ variant, size, disabled }),
    className
  );
  return (
    <button {...props} className={mergedClassNames} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
