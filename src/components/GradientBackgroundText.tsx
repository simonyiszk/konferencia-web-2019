import React from 'react';
import styled from 'styled-components';
import Text, { TextProps } from './Text';

// Sources:
// - https://css-tricks.com/multi-line-inline-gradient/
// - https://css-tricks.com/multi-line-padded-text/#article-header-id-1
// - http://krasimirtsonev.com/blog/article/css-the-background-color-and-overlapping-rows-inline-element/

const GradientBackgroundTextWrapper = styled(Text)`
  /* Required for masking which is based on absolute positioning */
  position: relative;

  overflow: hidden;
  background: white;
`;

type GradientBackgroundTextMaskProps = Pick<TextProps, 'px'>;

const GradientBackgroundTextMask = styled.span<GradientBackgroundTextMaskProps>`
  padding-top: inherit;
  padding-bottom: inherit;
  background: black;

  box-decoration-break: clone;
  box-shadow: ${({ px }) => `${px} 0 black, -${px} 0 black`};

  @supports (mix-blend-mode: lighten) {
    ::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(45deg, #e93cac, #00bce3);
      content: '';
      mix-blend-mode: lighten;
      pointer-events: none;
    }
  }
`;

const GradientBackgroundTextContent = styled.span`
  /* Avoid background overlapping between lines */
  position: relative;

  color: white;
`;

type GradientBackgroundTextProps = TextProps;

const GradientBackgroundText = ({
  px,
  children,
  ...props
}: GradientBackgroundTextProps) => (
  <GradientBackgroundTextWrapper px={px} {...props}>
    <GradientBackgroundTextMask px={px}>
      <GradientBackgroundTextContent>{children} </GradientBackgroundTextContent>
    </GradientBackgroundTextMask>
  </GradientBackgroundTextWrapper>
);

GradientBackgroundText.defaultProps = {
  px: '0.5em',
  py: '0.25em',
};

export default GradientBackgroundText;
