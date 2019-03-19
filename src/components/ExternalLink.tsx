import styled from 'styled-components';
import Link from './Link';

const ExternalLink = styled(Link).attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})({});

export default ExternalLink;
