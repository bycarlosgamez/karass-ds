// MUST be named Theme.ts (capital T)
import { create } from 'storybook/theming';

export default create({
  base: 'light',

  // Branding
  brandTitle: 'Karass (bycarlosgamez)',
  brandUrl:   'https://bycarlosgamez.com',
  brandImage: '/favicon.svg',
  brandTarget: '_self',

  // Primary palette
  colorPrimary:   '#3A10E5',
  colorSecondary: '#585C6D',

  // UI backgrounds
  appBg:           '#ffffff',
  appContentBg:    '#ffffff',
  appPreviewBg:    '#ffffff',
  appBorderColor:  '#585C6D',
  appBorderRadius: 4,

  // Text
  textColor:        '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar
  barBg:          '#ffffff',
  barTextColor:   '#9E9E9E',
  barSelectedColor:'#585C6D',
  barHoverColor:  '#585C6D',
});
