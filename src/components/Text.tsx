import { Box, BoxProps } from '@rebass/grid';
import styled from 'styled-components';
import {
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  textAlign,
  TextAlignProps,
  textStyle,
  TextStyleProps,
} from 'styled-system';

export type TextProps = BoxProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps &
  TextStyleProps & {
    as?: React.ElementType; // TODO: Remove this line
  };

const Text = styled(Box)<TextProps>`
  ${fontWeight}
  ${lineHeight}
  ${textAlign}
  ${textStyle}
`;

export default Text;
