import styled from 'styled-components';
import Measure from './Measure';
import Paragraph from './Paragraph';

const Note = styled(Measure)`
  background: linear-gradient(45deg, #fffceb -50%, #fbf1a9 250%);
  border-radius: 1em;
`;

Note.defaultProps = {
  ...Note.defaultProps,
  as: Paragraph,
  textStyle: 'caps',
  textAlign: 'center',
  p: 3,
  mx: 'auto',
};

export default Note;
