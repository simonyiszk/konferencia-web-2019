import styled from 'styled-components';
import Measure from './Measure';

const Note = styled(Measure)`
  background: linear-gradient(45deg, #fffceb -50%, #fbf1a9 250%);
  border-radius: 1em;
`;

Note.defaultProps = {
  textStyle: 'caps',
  p: 3,
};

export default Note;
