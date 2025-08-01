import { ComponentProps, ReactNode } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

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

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  const buttonClassNames = clsx(
    styles.button,
    styles[variant],
    styles[size],
    { [styles.disabled]: disabled },
    className
  );

  return (
    <button {...props} className={buttonClassNames} disabled={disabled}>
      {children}
    </button>
  );
};
