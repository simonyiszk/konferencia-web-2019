import styled from 'styled-components';
import ExternalLink from './ExternalLink';

const LinkButton = styled(ExternalLink)`
  display: inline-block;
  padding: 0.75em 1.5em;
  color: currentcolor;
  border: 0.125em solid;
  transition: all 0.2s
    ${({ theme }) => theme.transitionTimingFunctions.decelerate};

  :hover {
    /* TODO: Make colors customizable */
    color: ${({ theme }) => theme.colors.navy};
    text-decoration: none;
    background: white;
    border-color: white;
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
