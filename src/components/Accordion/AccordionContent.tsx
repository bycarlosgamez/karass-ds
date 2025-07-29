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

function AccordionContent({
  className,
  isOpen,
  children,
}: AccordionContentProps) {
  const mergedClassNames = twMerge(
    accordionContentStyles(),
    !isOpen ? 'invisible h-0 overflow-hidden' : '',
    className
  );

  return <div className={mergedClassNames}>{children}</div>;
}

export default AccordionContent;
