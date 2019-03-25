import styled from 'styled-components';
import Measure from '../components/Measure';

const Slogan = styled(Measure)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 1em;
`;

Slogan.defaultProps = {
  textStyle: 'caps',
  color: 'navy',
  bg: '#eeea',
};

export default Slogan;
