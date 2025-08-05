import path from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],
  framework: {
    name:  '@storybook/react-vite',
    options:{},
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: (baseConfig) => ({
    ...baseConfig,
    resolve: {
      ...(baseConfig.resolve || {}),
      alias: {
        ...(baseConfig.resolve?.alias || {}),
        '@': path.resolve(__dirname, '../src'),
      },
    },
  }),
};

export default config;
