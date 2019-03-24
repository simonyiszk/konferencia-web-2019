import React from 'react';
import styled from 'styled-components';
import Text, { TextProps } from './Text';

// Sources:
// - https://css-tricks.com/multi-line-inline-gradient/
// - https://css-tricks.com/multi-line-padded-text/#article-header-id-1

const GradientBackgroundTextOuter = styled(Text)`
  position: relative;
  overflow: hidden;
  background: white;

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

type GradientBackgroundTextInnerProps = TextProps & {
  offsetX: number | string;
};

const GradientBackgroundTextInner = styled(Text)<
  GradientBackgroundTextInnerProps
>`
  background: black;
  box-shadow: ${({ offsetX }) => `${offsetX} 0 black, -${offsetX} 0 black`};

  /* Fix overlap between backgrounds and texts */
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    padding: inherit;
    margin: ${({ offsetX }) => `0 ${offsetX}`};
    color: white;
    content: '${({ children }) => `${children}`}';
    pointer-events: none;
  }
`;

GradientBackgroundTextInner.defaultProps = {
  as: 'span',
};

type GradientBackgroundTextProps = Partial<GradientBackgroundTextInnerProps> & {
  [key: string]: any;
};

const GradientBackgroundText = ({
  as,
  offsetX,
  py,
  children,
  ...props
}: GradientBackgroundTextProps) => (
  <GradientBackgroundTextOuter as={as} px={offsetX} py={py} {...props}>
    <GradientBackgroundTextInner offsetX={offsetX!} py={py}>
      {children}
    </GradientBackgroundTextInner>
  </GradientBackgroundTextOuter>
);

GradientBackgroundText.defaultProps = {
  offsetX: '0.5em',
  py: '0.25em',
};

export default GradientBackgroundText;
