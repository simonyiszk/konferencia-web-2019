import * as CSS from 'csstype';
import styled from 'styled-components';

type ParallaxLayerProps = {
  src: string;
  position?: CSS.BackgroundPositionProperty<number>;
  repeat?: CSS.BackgroundRepeatProperty;
  size?: CSS.BackgroundSizeProperty<number>;
  translateX?: number;
  translateY?: number;
  sizeOverhead?: number;
};

const ParallaxLayer = styled.div.attrs<ParallaxLayerProps>(
  ({ translateX = 0, translateY = 0 }) => ({
    style: {
      transform: `translate(${`${translateX * 100}%, ${translateY * 100}%`})`,
    },
  }),
)<ParallaxLayerProps>`
  position: absolute;
  top: -${({ sizeOverhead }) => ((sizeOverhead as number) / 2) * 100}%;
  left: -${({ sizeOverhead }) => ((sizeOverhead as number) / 2) * 100}%;
  width: ${({ sizeOverhead }) => (1 + (sizeOverhead as number)) * 100}%;
  height: ${({ sizeOverhead }) => (1 + (sizeOverhead as number)) * 100}%;
  background-image: ${({ src }) => `url(${src})`};
  background-position: ${({ position }) => position};
  background-repeat: ${({ repeat }) => repeat};
  background-size: ${({ size }) => size};
  ${({ translateX, translateY }) =>
    (translateX != null || translateY != null) && 'will-change: transform'};
  transition: transform 1s
    ${({ theme }) => theme.transitionTimingFunctions.decelerate};

  @media (prefers-reduced-motion: reduce) {
    transform: translate(0, 0) !important;
  }
`;

ParallaxLayer.defaultProps = {
  position: 'center',
  repeat: 'no-repeat',
  size: 'cover',
  sizeOverhead: 0,
};

export default ParallaxLayer;
