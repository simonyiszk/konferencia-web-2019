import styled from 'styled-components';
import Measure from './Measure';

const Slogan = styled(Measure)`
  background: linear-gradient(45deg, #fffceb, #fbf1a9 200%);
  border-radius: 1em;
`;

Slogan.defaultProps = {
  textStyle: 'caps',
};

export default Slogan;
