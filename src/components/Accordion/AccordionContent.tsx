import { ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type AccordionContentProps = {
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
};

const accordionContentStyles = cva(
  'px-4 py-2 bg-white text-base text-gray-500'
);

function AccordionContent({ className, ...props }: AccordionContentProps) {
  if (!props.isOpen) return null;

  const mergedClassNames = twMerge(accordionContentStyles(), className);

  return <div className={mergedClassNames}>{props.children}</div>;
}

export default AccordionContent;
