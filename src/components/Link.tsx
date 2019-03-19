import styled from 'styled-components';
import Text from './Text';

const Link = styled(Text)<JSX.IntrinsicElements['a']>`
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
