import styled from 'styled-components';
import Text from './Text';

type LinkProps = {
  href?: string;
};

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
