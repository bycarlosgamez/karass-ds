import { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export type AccordionHeaderProps = {
  children: ReactNode;
  onToggle?: () => void;
  isOpen?: boolean;
  className?: string;
};

const accordionHeaderStyles = cva(
  'w-full px-4 py-2 bg-white hover:bg-slate-100 font-medium text-lg flex justify-between items-center border-b border-slate-300 cursor-pointer'
);
export const AccordionHeader = ({
  children,
  className,
  isOpen,
  ...props
}: AccordionHeaderProps) => {
  const mergedClassNames = twMerge(accordionHeaderStyles(), className);

  return (
    <button onClick={props.onToggle} className={mergedClassNames}>
      <span>{children}</span>
      <span className='text-lg'>{isOpen ? '−' : '+'}</span>
    </button>
  );
};
