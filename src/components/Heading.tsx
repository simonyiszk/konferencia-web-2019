import styled from 'styled-components';
import Text, { TextProps } from './Text';

type HeadingProps = TextProps & {
  level: number;
};

const Heading = styled(Text).attrs<HeadingProps>(({ as, fontSize, level }) => ({
  as: as || `h${level}`,
  fontSize: fontSize || 5 - level,
}))<HeadingProps>`
  letter-spacing: 0.01em;
`;

Heading.defaultProps = {
  fontFamily: 'heading',
  fontWeight: 700,
  lineHeight: 1.25,
};

export default Heading;
