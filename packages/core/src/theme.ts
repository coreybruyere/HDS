import { em, rem } from 'polished';

export interface Scale<TValue> {
  [id: string]: TValue;
}

export type Breakpoints<T> = Array<T> & {
  sm: string;
  med: string;
  lg: string;
  xl: string;
};

const breakpoints = ['40em', '52em', '64em', '80em'] as Breakpoints<any>;

/**
 * breakpoint aliases
 */
breakpoints.sm = breakpoints[0]; /* 600px = 40em */
breakpoints.med = breakpoints[1]; /* 780px = 52em */
breakpoints.lg = breakpoints[2]; /* 960px = 64em */
breakpoints.xl = breakpoints[3]; /* 1200px = 80em */

const space: Scale<string> = {
  0: '0',
  1: rem(4),
  2: rem(8),
  3: rem(12),
  4: rem(16),
  5: rem(24),
  6: rem(32),
  7: rem(40)
};
/**
 * space aliases
 */
space.null = space[0]; //* 0px */
space.xs = space[1]; //* 4px = 0.25rem */
space.base = space[2]; //* 8px = 0.5rem */
space.med = space[3]; //* 12px = 0.75rem */
space.lg = space[4]; //* 16px = 1rem */
space.xl = space[5]; //* 24px = 1.5rem */
space.xxl = space[6]; //* 32px = 2rem */
space.xxxl = space[7]; //* 40px = 2.5rem  */

const zIndices: Scale<number> = {
  0: -1,
  1: 1,
  2: 100,
  3: 200,
  4: 300,
  5: 400
};
/**
 * zIndices aliases
 */
zIndices.underlay = zIndices[0]; /* -1 */
zIndices.default = zIndices[1]; /* 1 */
zIndices.overlay = zIndices[2]; /* 100 */
zIndices.backdrop = zIndices[3]; /* 200 */
zIndices.popover = zIndices[4]; /* 300 */
zIndices.modal = zIndices[5]; /* 400 */

export interface ThemeColor {
  [name: string]: Scale<string> | { name: string };
}
const colors: ThemeColor = {
  neutral: {
    0: '#FFFFFF',
    1: '#000000'
  },
  base: {
    1: '#F3F5F7',
    2: '#E0E6EB',
    3: '#C5CFD8',
    4: '#A7B3BE',
    5: '#697886',
    6: '#4A545E',
    7: '#363D45',
    8: '#22262B'
  },
  primary: {
    1: '#D1E5FA',
    2: '#74B2F1',
    3: '#1775D3',
    4: '#1059A2',
    5: '#0C3F74'
  }
};
colors.focus = colors.primary[2];
colors.primaryBackground = colors.neutral[0];

const fonts = {
  familySans: "'Helvetica Neue','Helvetica','Arial',sans-serif"
};

const fontSizes: Scale<string> = {
  0: rem(12),
  1: rem(14),
  2: rem(15),
  3: rem(16),
  4: rem(18),
  5: rem(24),
  6: rem(32),
  7: rem(40)
};
/**
 * fontSizes aliases
 */
fontSizes.xs = fontSizes[0]; /* 12px = 0.75rem */
fontSizes.sm = fontSizes[1]; /* 14px = 0.875rem */
fontSizes.med = fontSizes[2]; /* 15px = 0.9375rem */
fontSizes.base = fontSizes[3]; /* 16px = 1rem */
fontSizes.lg = fontSizes[4]; /* 18px = 1.125rem */
fontSizes.xl = fontSizes[5]; /* 24px = 1.5rem */
fontSizes.xxl = fontSizes[6]; /* 32px = 2rem */
fontSizes.xxxl = fontSizes[7]; /* 40px = 2.5rem */

const radii: Scale<string> = {
  0: rem(2),
  1: rem(4)
};
/**
 * radii aliases
 */
radii.base = radii[0]; /* 2px = 0.125rem  */
radii.lg = radii[1]; /* 4px = 0.25rem */

const borders: Scale<string> = {
  0: rem(1),
  1: rem(2)
};
/**
 * borders aliases
 */
borders.base = borders[0]; /* 1px = 0.0625rem */
borders.lg = borders[1]; /* 2px = 0.125rem  */

const shadows: Scale<string> = {
  0: '0 1px 1px rgba(0,0,0,0.1)',
  1: '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
  2: '0 4px 12px 0 rgba(0,0,0,0.1)'
};
/**
 * shadows aliases
 */
shadows.sm = shadows[0];
shadows.med = shadows[1];
shadows.lg = shadows[2];

const defaultTheme = {
  breakpoints,
  space,
  zIndices,
  colors,
  fonts,
  fontSizes,
  radii,
  borders,
  shadows
};

export default defaultTheme;
