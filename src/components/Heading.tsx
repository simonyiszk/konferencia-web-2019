import styled from 'styled-components';
import Text, { TextProps } from './Text';

type HeadingProps = TextProps & {
  level: number;
};

const Heading = styled(Text).attrs<HeadingProps>(({ as, fontSize, level }) => ({
  as: as || `h${level}`,
  fontSize: fontSize || 4 - level,
}))<HeadingProps>({});

Heading.defaultProps = {
  lineHeight: 1.25,
};

export default Heading;
