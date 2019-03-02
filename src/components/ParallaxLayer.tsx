import * as CSS from 'csstype';
import styled from 'styled-components';

type Props = {
  src: string;
  position?: CSS.BackgroundPositionProperty<number>;
  repeat?: CSS.BackgroundRepeatProperty;
  size?: CSS.BackgroundSizeProperty<number>;
  translateX?: number;
  translateY?: number;
};

const ParallaxLayer = styled.div.attrs<Props>(
  ({ translateX = 0, translateY = 0 }) => ({
    style: {
      transform: `translate(${`${translateX * 100}%, ${translateY * 100}%`})`,
    },
  }),
)<Props>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: ${({ position = 'center' }) => position};
  background-repeat: ${({ repeat = 'no-repeat' }) => repeat};
  background-size: ${({ size = 'cover' }) => size};
  will-change: transform;
`;

export default ParallaxLayer;
