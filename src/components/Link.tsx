import styled from 'styled-components';
import Text, { TextProps } from './Text';

type LinkProps = TextProps & JSX.IntrinsicElements['a'];

const Link = styled(Text)<LinkProps>`
  text-decoration: none;
  text-underline-position: under;

  :hover {
    text-decoration: dashed underline;
  }
`;

Link.defaultProps = {
  as: 'a',
  color: 'darkPink',
};

export default Link;
