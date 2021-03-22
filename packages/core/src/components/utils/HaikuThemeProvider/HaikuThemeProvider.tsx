import React from 'react';
import { ThemeProvider, ThemeProviderProps } from 'styled-components';

const merge = require('deepmerge');

import defaultTheme from '../../../theme';

export type HaikuThemeProviderProps = React.PropsWithChildren<{}> & Partial<ThemeProviderProps<typeof defaultTheme>>;

const HaikuThemeProvider = (props: any) => {
  const { children, theme } = props;
  const haikuTheme = theme ? merge(defaultTheme, theme) : defaultTheme;

  return <ThemeProvider theme={haikuTheme}>{children}</ThemeProvider>;
};

export default HaikuThemeProvider;
