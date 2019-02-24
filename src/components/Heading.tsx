import { modularScale } from 'polished';
import styled from 'styled-components';

type Props = {
  level: number;
  [key: string]: any; // TODO: Remove this line
};

const Heading = styled.h2.attrs(({ level, as }: any) => ({
  as: as || `h${level}`,
}))<Props>`
  font-size: ${({ level }) => modularScale(5 - level)};
`;

export default Heading;
