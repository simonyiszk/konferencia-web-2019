import { modularScale } from 'polished';
import styled from 'styled-components';
import { color, ColorProps, space, SpaceProps } from 'styled-system';

type Props = {
  level: number;
  [key: string]: any; // TODO: Remove this line
} & ColorProps &
  SpaceProps;

const Heading = styled.h2.attrs(({ level, as }: any) => ({
  as: as || `h${level}`,
}))<Props>`
  font-size: ${({ level }) => modularScale(3 - level)};
  ${color};
  ${space};
`;

export default Heading;
