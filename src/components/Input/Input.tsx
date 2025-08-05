import type { ComponentProps } from 'react';
import clsx from 'clsx';

export type InputProps = ComponentProps<'input'> & {
  label: string;
  details?: string;
  required?: boolean;
  unlabeled?: boolean;
  disabled?: boolean;
  error?: string;
};

export const Input = ({
  label,
  value,
  details,
  placeholder,
  required = false,
  unlabeled = false,
  disabled = false,
  error,
  ...props
}: InputProps) => {
  return (
    <label className='flex flex-col gap-1.5'>
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

      <input
        value={value}
        placeholder={unlabeled ? label : placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        className={clsx(
          'block w-full gap-2 rounded-md bg-white px-3 py-1 text-sm placeholder-slate-400 shadow-xs focus:outline-hidden focus:ring-2',
          !error && 'ring-1 ring-inset ring-slate-500',
          disabled && 'cursor-not-allowed bg-slate-200',
          error &&
            'ring-1 ring-inset ring-red-500 focus:ring-red-500 focus:bg-red-50 border border-red-500'
        )}
        {...props}
      />

      {error ? (
        <span className='text-xs text-red-500 mt-1'>{error}</span>
      ) : details ? (
        <span className='text-xs text-slate-500'>{details}</span>
      ) : null}
    </label>
  );
};
