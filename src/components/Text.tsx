import { Box, BoxProps } from '@rebass/grid';
import styled from 'styled-components';
import {
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

export type TextProps = BoxProps &
  LineHeightProps &
  TextAlignProps & {
    as?: React.ElementType; // TODO: Remove this line
  };

const Text = styled(Box)<TextProps>`
  ${lineHeight}
  ${textAlign}
`;

export default Text;
