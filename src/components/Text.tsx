import { Box, BoxProps } from '@rebass/grid';
import styled from 'styled-components';
import {
  fontFamily,
  FontFamilyProps,
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
  FontFamilyProps &
  FontWeightProps &
  LineHeightProps &
  TextAlignProps &
  TextStyleProps & {
    as?: React.ElementType; // TODO: Remove this line
  };

const Text = styled(Box)<TextProps>`
  ${fontFamily}
  ${fontWeight}
  ${lineHeight}
  ${textAlign}
  ${textStyle}
`;

export default Text;
