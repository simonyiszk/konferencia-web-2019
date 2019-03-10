import styled from 'styled-components';
import {
  color,
  ColorProps,
  fontSize,
  FontSizeProps,
  space,
  SpaceProps,
} from 'styled-system';

export type TextProps = ColorProps & FontSizeProps & SpaceProps;

const Text = styled.div<TextProps>`
  ${color};
  ${fontSize};
  ${space};
`;

export default Text;
