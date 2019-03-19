import styled from 'styled-components';

const Link = styled.a`
  color: ${({ theme }) => theme.colors.darkPink};
  text-underline-position: under;

  :hover {
    text-decoration: none;
  }
`;

export default Link;
