import { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type CardHeaderProps = PropsWithChildren<
  VariantProps<typeof cardHeaderStyles> & HTMLAttributes<HTMLDivElement>
>;

const cardHeaderStyles = cva(
  'mb-2 text-2xl font-bold tracking-tight text-slate-900'
);

export const CardHeader = ({ children }: CardHeaderProps) => {
  const mergedClassNames = twMerge(cardHeaderStyles());

  return <h5 className={mergedClassNames}>{children}</h5>;
};
