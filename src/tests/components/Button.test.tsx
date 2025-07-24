import { render, screen } from '@testing-library/react';

import { Button } from '../../components';

describe('Button Component', () => {
  it('Should render a button with default styles', () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click Me');

    expect(button).toHaveClass('bg-teal-600');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('text-base');

    expect(button).not.toBeDisabled();
  });

  it('Should render a button with outlined variant', () => {
    render(<Button variant='outlined'>Click Me</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click Me');

    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-slate-400');
    expect(button).toHaveClass('text-teal-700');
  });

  it('Should render a large button', () => {
    render(<Button size='large'>Click Me</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click Me');

    expect(button).toHaveClass('text-lg');
  });

  it('Should render a destructive small button variant', () => {
    render(
      <Button variant='destructive' size='small'>
        Click Me
      </Button>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click Me');

    expect(button).toHaveClass('text-sm');
    expect(button).toHaveClass('bg-red-600');
    expect(button).toHaveClass('text-white');
  });

  it('Should render a disabled button', () => {
    render(<Button disabled={true}>Click Me</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click Me');

    expect(button).toHaveClass('cursor-not-allowed');

    expect(button).toBeDisabled();
  });

  it('It should not merge custom class name with default styles', () => {
    render(<Button className='text-bold'>Click Me</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Click Me');

    expect(button).not.toHaveClass('text-bold');
    expect(button).toHaveClass('bg-teal-600');
  });
});
