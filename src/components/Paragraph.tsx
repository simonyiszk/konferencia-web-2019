import styled from 'styled-components';
import Text, { TextProps } from './Text';

type ParagraphProps = TextProps;

const Paragraph = styled(Text)<ParagraphProps>({});

Paragraph.defaultProps = {
  as: 'p',
  lineHeight: 1.5,
};

export default Paragraph;
