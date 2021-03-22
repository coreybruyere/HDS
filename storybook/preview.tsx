import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming/create';
import { withA11y } from '@storybook/addon-a11y';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

import ThemeDecorator from './theme-decorator';

const theme = create({
  base: 'light',
  colorPrimary: '#2266ee',
  colorSecondary: '#2266ee',

  // // UI
  appBg: '#F3F5F7',
  appContentBg: '#FFFFFF',
  appBorderColor: '#A7B3BE',
  appBorderRadius: 3,

  // // Typography
  fontBase: '"Inter", "Helvetica Neue","Helvetica","Arial",sans-serif',
  fontCode: 'monospace',

  // // Text colors
  textColor: '#262626',
  textInverseColor: '#D9D9D9',

  // // Toolbar default and active colors
  barTextColor: '#22262B',
  barSelectedColor: '#1775D3',
  barBg: '#E0E6EB',

  // // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#E0E6EB',
  inputTextColor: '#22262B',
  inputBorderRadius: 3,

  brandTitle: 'HDS',
  brandUrl: '.',
});

// https://storybook.js.org/docs/configurations/options-parameter/
addParameters({
  options: {
    panelPosition: 'right',
    sidebarAnimations: false,
    showRoots: true,
    theme: theme
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    previewSource: 'open',
    theme: theme
  },
  viewMode: 'docs'
});

// Decorators
addDecorator(ThemeDecorator);
addDecorator(withKnobs);
// @ts-ignore
addDecorator(withA11y);
