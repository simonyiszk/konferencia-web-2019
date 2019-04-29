import React from 'react';
import styled from 'styled-components';
import Text, { TextProps } from './Text';

// Sources:
// - https://css-tricks.com/multi-line-inline-gradient/
// - https://css-tricks.com/multi-line-padded-text/#article-header-id-1
// - http://krasimirtsonev.com/blog/article/css-the-background-color-and-overlapping-rows-inline-element/

const GradientBackgroundTextWrapper = styled(Text)`
  position: relative; /* Required for masking */
  overflow: hidden;
  background: white;
`;

type GradientBackgroundTextMaskProps = Pick<TextProps, 'px'>;

const GradientBackgroundTextMask = styled.span<GradientBackgroundTextMaskProps>`
  padding-top: inherit;
  padding-bottom: inherit;
  background: black;

  box-shadow: ${({ px }) => `${px} 0 black, -${px} 0 black`};
  box-decoration-break: clone;

  @supports (mix-blend-mode: lighten) {
    ::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: linear-gradient(45deg, #e93cac, #00bce3);
      mix-blend-mode: lighten;
      content: '';
      pointer-events: none;
    }
  }
`;

const GradientBackgroundTextContent = styled.span`
  position: relative; /* Avoid background overlapping between lines */
  color: white;
`;

type GradientBackgroundTextProps = TextProps & {
  [key: string]: any; // TODO: Remove this line
};

export default function GradientBackgroundText({
  px,
  children,
  ...props
}: GradientBackgroundTextProps) {
  return (
    <GradientBackgroundTextWrapper px={px} {...props}>
      <GradientBackgroundTextMask px={px}>
        <GradientBackgroundTextContent>
          {children}
        </GradientBackgroundTextContent>
      </GradientBackgroundTextMask>
    </GradientBackgroundTextWrapper>
  );
}

GradientBackgroundText.defaultProps = {
  px: '0.5em',
  py: '0.25em',
};
