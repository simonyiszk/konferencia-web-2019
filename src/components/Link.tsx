import styled from 'styled-components';
import Text, { TextProps } from './Text';

type LinkProps = TextProps & JSX.IntrinsicElements['a'];

const Link = styled(Text)<LinkProps>`
  text-underline-position: under;

  :hover {
    text-decoration: none;
  }
`;

Link.defaultProps = {
  as: 'a',
  color: 'darkPink',
};

export default Link;
