import styled from 'styled-components';
import Text, { TextProps } from './Text';

type MeasureProps = TextProps & {
  maxWidth?: string | number;
};

const Measure = styled<MeasureProps>(Text)`
  max-width: ${({ maxWidth = '34em' }) => maxWidth};
`;

export default Measure;
