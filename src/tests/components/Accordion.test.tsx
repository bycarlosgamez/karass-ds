import { render, screen, fireEvent } from '@testing-library/react';

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from '../../components';

describe('Accordion Component', () => {
  it('Should render an accordion component with one item', () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionHeader>Accordion Title</AccordionHeader>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText('Accordion Title')).toBeInTheDocument();

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('Should toggle section content visibility', () => {
    render(
      <Accordion>
        <AccordionItem>
          <AccordionHeader>Accordion Title</AccordionHeader>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const contentElement = screen.getByText('Content');

    expect(contentElement).toHaveClass('invisible');

    fireEvent.click(screen.getByText('Accordion Title'));

    expect(contentElement).not.toHaveClass('invisible');
  });
});
