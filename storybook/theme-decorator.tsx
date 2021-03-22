import React from 'react';

import { HaikuThemeProvider, Box, GlobalStyle } from '../packages/core/src';

const ThemeDecorator = (Story: any) => (
  <HaikuThemeProvider>
    <>
      <GlobalStyle />
      <Box p={6}>
        <Story />
      </Box>
    </>
  </HaikuThemeProvider>
);

export default ThemeDecorator;
