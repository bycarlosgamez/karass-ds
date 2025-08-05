import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card,
  CardBody,
  CardContent,
  CardCTA,
  CardHeader,
  CardImage,
} from '@/components';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CardComponent: Story = {
  render: (args) => (
    <Card {...args}>
      <CardImage
        src='https://placehold.co/600x400'
        href='https://placehold.co/600x400'
        alt='placeholder image'
      />
      <CardContent>
        <CardHeader>CardHeader</CardHeader>
        <CardBody>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
          necessitatibus illo earum aliquam harum, doloribus sit expedita magnam
          vero non sequi labore beatae. Sit, ut. Neque minus dolorum
          perspiciatis ipsa?
        </CardBody>
        <CardCTA href='#' />
      </CardContent>
    </Card>
  ),
};

export const CardWithoutImage: Story = {
  render: (args) => (
    <Card {...args}>
      <CardContent>
        <CardHeader>No Image</CardHeader>
        <CardBody>This card skips the preview image entirely.</CardBody>
        <CardCTA href='#' />
      </CardContent>
    </Card>
  ),
};

export const MinimalCard: Story = {
  render: () => (
    <Card>
      <CardContent>Just some text, no flair.</CardContent>
    </Card>
  ),
};
