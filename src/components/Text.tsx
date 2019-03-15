import styled from 'styled-components';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';

export type TextProps = ColorProps &
  FontSizeProps &
  SpaceProps &
  TextAlignProps;

const Text = styled.div<TextProps>`
  ${color};
  ${fontSize};
  ${space};
  ${textAlign}
`;

export default Text;
