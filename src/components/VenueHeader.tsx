import styled from 'styled-components';
import Heading from './Heading';

const VenueHeader = styled(Heading)`
  margin: 0;
  padding: 0.67em 0;
  color: white;
  background: linear-gradient(45deg, #e93cac, #00bce3);
`;

VenueHeader.defaultProps = {
  ...VenueHeader.defaultProps,
  fontFamily: 'body',
};

export default VenueHeader;
