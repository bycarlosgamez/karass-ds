import React, { ReactNode, ReactElement } from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

type AccordionItemProps = {
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
};

const accordionItemStyles = cva('bg-white');

export const AccordionItem = ({
  className,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) => {
  const mergedClassNames = twMerge(accordionItemStyles(), className);

  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement, {
        isOpen,
        onToggle,
      });
    }
    return child;
  });

  return <div className={mergedClassNames}>{enhancedChildren}</div>;
};
