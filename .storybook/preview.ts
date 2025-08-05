import type { Preview } from '@storybook/react-vite';
import '../src/index.css';    // global Tailwind/CSS
import theme from './Theme';

const preview: Preview = {
  parameters: {
    docs: {
      theme,                // applies theme inside MDX/docs panels
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date:  /Date$/i,
      },
    },
  },
};

export default preview;
