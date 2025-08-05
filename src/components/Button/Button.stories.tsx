import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@/components';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  // tags: ['autodocs'],
  args: {
    children: 'Button',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Primary',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    children: 'Outlined',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'medium',
    children: 'Destructive',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'medium',
    children: 'Success',
  },
};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    size: 'medium',
    children: 'Neutral',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'medium',
    children: 'Ghost',
  },
};

export const Disabled: Story = {
  args: {
    size: 'medium',
    children: 'Disabled',
    disabled: true,
  },
};
