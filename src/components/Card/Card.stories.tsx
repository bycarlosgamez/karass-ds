import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '@/components';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    border: 'none',
    children: 'Small Card Content',
  },
};
