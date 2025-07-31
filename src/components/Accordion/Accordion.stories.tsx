import type { Meta, StoryObj } from '@storybook/react-vite';
import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import AccordionHeader from './AccordionHeader';
import AccordionContent from './AccordionContent';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <Accordion defaultOpenIndex={0}>
        <AccordionItem>
          <AccordionHeader>Section One</AccordionHeader>
          <AccordionContent>This is the first section.</AccordionContent>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>Section Two</AccordionHeader>
          <AccordionContent>This is the second section.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  },
};
