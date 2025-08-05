import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from '@/components';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AccordionComponent: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem>
        <AccordionHeader>Section One</AccordionHeader>
        <AccordionContent>This is the first section.</AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Section Two</AccordionHeader>
        <AccordionContent>This is the second section.</AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>Section Three</AccordionHeader>
        <AccordionContent>This is the third section.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
