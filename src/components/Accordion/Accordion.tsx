import React, { useState, ReactNode } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type AccordionProps = {
  children: ReactNode;
  defaultOpenIndex?: number;
  className?: string;
};

type InjectedProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const accordionStyles = cva('bg-white min-w-md');

function Accordion({ className, ...props }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    props.defaultOpenIndex ?? null
  );

  const mergedClassNames = twMerge(accordionStyles(), className);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  const childrenWithProps = React.Children.map(
    props.children,
    (child, index) => {
      if (React.isValidElement<InjectedProps>(child)) {
        return React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
        });
      }
      return child;
    }
  );

  return <div className={mergedClassNames}>{childrenWithProps}</div>;
}

export default Accordion;
