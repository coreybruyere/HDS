import styled from 'styled-components';
import { SpaceProps, LayoutProps, FlexboxProps, ColorProps } from 'styled-system';

import { Box } from '../Box';

export type FlexProps = SpaceProps & LayoutProps & FlexboxProps & ColorProps;

const Flex = styled(Box)<FlexProps>`
  display: flex;
`;

export default Flex;
