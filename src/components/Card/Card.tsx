import { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type CardProps = PropsWithChildren<
  VariantProps<typeof cardStyles> & HTMLAttributes<HTMLDivElement>
>;

const cardStyles = cva('max-w-sm bg-white border border-slate-200 rounded-lg', {
  variants: {
    shadow: {
      none: 'none',
      small: 'shadow-xs',
      medium: 'shadow-md',
      large: 'shadow-lg',
    },
  },

  defaultVariants: {
    shadow: 'small',
  },
});

export const Card = ({ shadow, children }: CardProps) => {
  const mergedClassNames = twMerge(cardStyles({ shadow }));
  return <article className={mergedClassNames}>{children}</article>;
};
