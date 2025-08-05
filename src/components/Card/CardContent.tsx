import { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type CardContentProps = PropsWithChildren<
  VariantProps<typeof cardContentStyles> & HTMLAttributes<HTMLDivElement>
>;

const cardContentStyles = cva('p-5');

export const CardContent = ({ children }: CardContentProps) => {
  const mergedClassNames = twMerge(cardContentStyles());

  return <div className={mergedClassNames}>{children}</div>;
};
