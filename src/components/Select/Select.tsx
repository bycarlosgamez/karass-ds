import { SelectHTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> & {
  variant?: 'primary' | 'secondary';
  options: { label: string; value: string }[];
  label: string;
  required?: boolean;
  unlabeled?: boolean;
  disabled?: boolean;
  error?: string;
  placeholder?: string;
  id: string;
};

const selectStyles = cva(
  'block w-full gap-2 rounded-md bg-white px-3 py-1 text-sm placeholder-slate-400 shadow-xs ring-1 ring-inset ring-slate-500 focus:outline-hidden focus:ring-2 min-w-2xs',
  {
    variants: {
      variant: {
        primary: '',
        secondary:
          'bg-slate-200 text-black border-slate-400 focus:ring-slate-500 focus:border-slate-500',
      },
      disabled: {
        true: 'cursor-not-allowed bg-slate-50 text-slate-400',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export const Select = ({
  variant,
  disabled = false,
  options,
  label,
  required,
  unlabeled,
  className,
  error,
  placeholder,
  id,
  ...props
}: SelectProps) => {
  const mergedClassNames = twMerge(
    selectStyles({ variant, disabled }),
    error && 'ring-red-500 focus:ring-red-500',
    className
  );

  return (
    <label htmlFor={id} className='flex flex-col gap-1.5'>
      <span
        className={clsx(
          'inline-flex items-center gap-1 text-sm font-medium',
          required &&
            'after:bg-red-500 after:h-1.5 after:w-1.5 after:rounded-full',
          unlabeled && 'sr-only'
        )}
      >
        {label}
      </span>
      <select
        {...props}
        className={mergedClassNames}
        disabled={disabled}
        id={id}
      >
        {placeholder && (
          <option value='' disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className='text-xs text-red-500 mt-1'>{error}</span>}
    </label>
  );
};
