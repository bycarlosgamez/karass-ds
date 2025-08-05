import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@/components';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Input',
    placeholder: 'Enter text',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Input' },
      },
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Enter text' },
      },
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the input field',
      table: {
        type: { summary: 'boolean' },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the input as required',
      table: {
        type: { summary: 'boolean' },
      },
    },
    error: {
      name: 'Error',
      control: 'text',
      description: 'Displays validation message and red ring-3 styling',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: 'Required Input',
  },
};

export const Prefilled: Story = {
  render: (args) => <Input {...args} value='email@email.com' />,
  args: {
    label: 'Prefilled Input',
    placeholder: 'Enter text',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Input with error',
    error: 'This field is required',
    placeholder: 'Enter text',
  },
};
