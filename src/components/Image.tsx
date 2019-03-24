import { Box, BoxProps } from '@rebass/grid';
import styled from 'styled-components';
import { height, HeightProps } from 'styled-system';

type ImageProps = BoxProps &
  HeightProps &
  JSX.IntrinsicElements['img'] & {
    as?: React.ElementType; // TODO: Remove this line
  };

const Image = styled(Box)<ImageProps>`
  ${height}
  vertical-align: middle;
`;

Image.defaultProps = {
  as: 'img',
};

export default Image;
