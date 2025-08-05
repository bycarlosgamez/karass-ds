import type { HTMLAttributes, PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export type BadgeProps = PropsWithChildren<
  VariantProps<typeof badgeStyle> & HTMLAttributes<HTMLDivElement>
>;

const badgeStyle = cva(
  'inline-flex items-center gap-1 rounded-md border border-opacity-50 px-2 py-1 font-medium text-xs',
  {
    variants: {
      variant: {
        default: 'bg-slate-50 text-slate-600 border-slate-400',
        primary: ' bg-teal-50 text-teal-600 border-teal-400',
        success: 'bg-green-50 text-green-700 border-green-600',
        danger: 'bg-red-50 text-red-700 border-red-400',
        warning: 'bg-yellow-50 text-yellow-800 border-yellow-600',
        information: 'bg-blue-50 text-blue-600 border-blue-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const Badge = ({ variant, children, ...props }: BadgeProps) => {
  return (
    <div className={badgeStyle({ variant })} {...props}>
      {children}
    </div>
  );
};
