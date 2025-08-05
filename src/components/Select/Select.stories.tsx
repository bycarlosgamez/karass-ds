import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from '@/components/';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    id: 'select-input',
    label: 'Select an option',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    id: 'select-input',
    label: 'Select an option',
    options: [
      { label: 'Option A', value: 'A' },
      { label: 'Option B', value: 'B' },
      { label: 'Option C', value: 'C' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    id: 'select-input',
    disabled: true,
    label: 'Select an option',
    options: [{ label: 'Disabled Option', value: 'disabled' }],
  },
};

export const Placeholder: Story = {
  args: {
    variant: 'primary',
    id: 'select-input',
    label: 'Choose an option',
    placeholder: 'Please select...',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
  },
};

export const Preselected: Story = {
  args: {
    variant: 'primary',
    id: 'select-input',
    label: 'Preselected option',
    defaultValue: '2',
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
  },
};

export const ErrorState: Story = {
  args: {
    variant: 'primary',
    id: 'select-input',
    label: 'Select with error',
    error: 'This field is required',
    options: [{ label: 'Valid Option', value: 'valid' }],
  },
};

export const LongOptions: Story = {
  args: {
    variant: 'primary',
    id: 'select-input',
    label: 'Select with long options',
    options: [
      {
        label:
          'This is a very long option label that might overflow and should be styled properly',
        value: 'long1',
      },
      {
        label:
          'Another long option to test wrapping or truncation strategies inside the Select component',
        value: 'long2',
      },
    ],
  },
};
