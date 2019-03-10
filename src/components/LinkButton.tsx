import styled from 'styled-components';

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.5em 1em;
  border: 0.125em solid;
  color: ${({ theme }) => theme.colors.moonGray};
  text-decoration: none;

  :hover {
    /* TODO: Make colors customizable */
    border-color: white;
    background: white;
    color: ${({ theme }) => theme.colors.navy};

    /* TODO: Remove this rule */
    text-shadow: none;
  }
`;

export default LinkButton;
