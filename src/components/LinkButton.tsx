import styled from 'styled-components';
import ExternalLink from './ExternalLink';

const LinkButton = styled(ExternalLink)`
  display: inline-block;
  padding: 0.75em 1.5em;
  border: 0.1em solid;
  color: ${({ theme }) => theme.colors.moonGray};
  font-size: 0.75em;
  transition: all 0.2s
    ${({ theme }) => theme.transitionTimingFunctions.decelerate};

  :hover {
    /* TODO: Make colors customizable */
    border-color: white;
    background: white;
    color: ${({ theme }) => theme.colors.navy};
    text-decoration: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
  }
`;

LinkButton.defaultProps = {
  as: 'a',
  textStyle: 'caps',
};

export default LinkButton;
