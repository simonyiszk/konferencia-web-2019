import * as CSS from 'csstype';
import styled from 'styled-components';

type Props = {
  src: string;
  position?: CSS.BackgroundPositionProperty<number>;
  repeat?: CSS.BackgroundRepeatProperty;
  size?: CSS.BackgroundSizeProperty<number>;
  translateX?: number;
  translateY?: number;
  offsetRange?: number;
};

const ParallaxLayer = styled.div.attrs<Props>(
  ({ translateX = 0, translateY = 0, offsetRange = 0 }) => ({
    style: {
      transform: `translate(${`${(translateX - offsetRange / 2) *
        100}%, ${(translateY - offsetRange / 2) * 100}%`})`,
    },
  }),
)<Props>`
  position: absolute;
  width: ${({ offsetRange = 0 }) => (1 + offsetRange) * 100}%;
  height: ${({ offsetRange = 0 }) => (1 + offsetRange) * 100}%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: ${({ position = 'center' }) => position};
  background-repeat: ${({ repeat = 'no-repeat' }) => repeat};
  background-size: ${({ size = 'cover' }) => size};
  transition: transform 1s cubic-bezier(0, 0, 0.2, 1);
  will-change: transform;

  @media (prefers-reduced-motion: reduce) {
    transform: ${({ offsetRange = 0 }) =>
      `translate(${`${(offsetRange / 2) * 100}%, ${(offsetRange / 2) *
        100}%`})`} !important;
  }
`;

export default ParallaxLayer;
