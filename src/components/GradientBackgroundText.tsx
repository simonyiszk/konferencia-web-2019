import React from 'react';
import styled from 'styled-components';
import Text, { TextProps } from './Text';

// Source: https://css-tricks.com/multi-line-inline-gradient/

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

const GradientBackgroundTextInner = styled(Text)`
  background: black;
  box-decoration-break: clone;

  /* Fix overlap between backgrounds and texts */
  ::after {
    position: absolute;
    top: 0;
    left: ${({ px }) => px};
    padding: ${({ px, py }) => `${py} ${px}`};
    color: white;
    content: '${({ children }) => `${children}`}';
    pointer-events: none;
    user-select: text;
  }
`;

GradientBackgroundTextInner.defaultProps = {
  as: 'span',
};

type GradientBackgroundTextProps = TextProps;

const GradientBackgroundText = ({
  px,
  py,
  children,
  ...props
}: GradientBackgroundTextProps) => (
  <GradientBackgroundTextOuter px={px} py={py} mx={`-${px}`} {...props}>
    <GradientBackgroundTextInner px={px} py={py}>
      {children}
    </GradientBackgroundTextInner>
  </GradientBackgroundTextOuter>
);

GradientBackgroundText.defaultProps = {
  px: '0.5em',
  py: '0.25em',
};

export default GradientBackgroundText;
