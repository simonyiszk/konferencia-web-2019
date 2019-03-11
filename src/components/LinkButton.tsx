import styled from 'styled-components';

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.5em 1em;
  border: 0.125em solid;
  color: ${({ theme }) => theme.colors.moonGray};
  text-decoration: none;
  transition: all 0.2s
    ${({ theme }) => theme.transitionTimingFunctions.decelerate};

  :hover {
    /* TODO: Make colors customizable */
    border-color: white;
    background: white;
    color: ${({ theme }) => theme.colors.navy};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
  }
`;

export default LinkButton;
