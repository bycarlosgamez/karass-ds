import { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type CardBodyProps = PropsWithChildren<
  VariantProps<typeof cardBodyStyles> & HTMLAttributes<HTMLDivElement>
>;

const cardBodyStyles = cva('mb-3 font-normal text-slate-700');

export const CardBody = ({ children }: CardBodyProps) => {
  const mergedClassNames = twMerge(cardBodyStyles());

  return <p className={mergedClassNames}>{children}</p>;
};
