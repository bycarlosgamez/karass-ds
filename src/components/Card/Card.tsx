import { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type CardProps = {
  size?: 'small' | 'medium' | 'large';
  shadow?: 'none' | 'small' | 'medium' | 'large';
  border?: 'none' | 'solid' | 'rounded';
  children?: ReactNode;
  className?: string;
};

const cardStyles = cva('p-4 rounded-sm bg-white shadow-md', {
  variants: {
    size: {
      small: 'w-64 h-48',
      medium: 'w-80 h-60',
      large: 'w-96 h-72',
    },
    shadow: {
      none: 'none',
      small: 'shdow-sm',
      medium: 'shadow-md',
      large: 'shadow-lg',
    },
    border: {
      none: 'border-none',
      solid: 'border border-gray-300',
      rounded: 'border border-gray-300 rounded-lg',
    },
  },

  defaultVariants: {
    size: 'medium',
    shadow: 'small',
    border: 'none',
  },
});

export const Card = ({
  size,
  shadow,
  border,
  children,
  className,
}: CardProps) => {
  const mergedClassNames = twMerge(
    cardStyles({ shadow, size, border }),
    className
  );
  return <div className={mergedClassNames}>{children}</div>;
};
