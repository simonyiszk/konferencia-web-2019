import styled from 'styled-components';
import Text, { TextProps } from './Text';

type Props = TextProps & {
  level: number;
  [key: string]: any; // TODO: Remove this line
};

const Heading = styled(Text).attrs(({ as, fontSize, level }: any) => ({
  as: as || `h${level}`,
  fontSize: fontSize || 3 - level,
}))<Props>({});

export default Heading;
