import styled, { StyledComponentProps } from 'styled-components';

import {
  compose,
  space,
  layout,
  flexbox,
  color,
  typography,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  ColorProps,
  TypographyProps
} from 'styled-system';

export type StyledSystemProps = SpaceProps & LayoutProps & FlexboxProps & ColorProps & TypographyProps;

export type PolymorphicType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

export type AsProp = PolymorphicType;

export type BoxProps = StyledComponentProps<
  'div',
  any,
  StyledSystemProps & {
    as?: AsProp;
  },
  never
>;

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0
  },
  compose(space, layout, flexbox, color, typography)
);

export default Box;
