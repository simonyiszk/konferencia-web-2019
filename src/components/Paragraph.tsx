import styled from 'styled-components';
import Text from './Text';

const Paragraph = styled(Text)({});

Paragraph.defaultProps = {
  as: 'p',
  lineHeight: 1.5,
};

export default Paragraph;
