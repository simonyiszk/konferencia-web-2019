import useDeviceOrientation from '@rehooks/device-orientation';
import React from 'react';
import { useWindowSize } from 'react-use';
import styled from 'styled-components';
import { useWindowMousePosition } from '../utils/hooks';
import FullHeight from './FullHeight';
import ParallaxLayer from './ParallaxLayer';
import ParallaxWrapper from './ParallaxWrapper';

import BackgroundURL from '../assets/hero/01-background.svg';
import StarsURL from '../assets/hero/02-stars.svg';
import PlanetsURL from '../assets/hero/03-planets.svg';
import SurfaceURL from '../assets/hero/04-surface.svg';
import FlyingSaucerURL from '../assets/hero/05-flying-saucer.svg';
import RocketURL from '../assets/hero/06-rocket.svg';
import ThinkingMonsterURL from '../assets/hero/07-thinking-monster.svg';

type HeroProps = {
  children: React.ReactNode;
};

const HeroChildrenWrapper = styled.div`
  position: relative;
  height: 100%;
  padding-top: 3em;
  color: white;
  text-align: center;
`;

export default function Hero({ children }: HeroProps) {
  let offsetX = 0;
  let offsetY = 0;

  const { width, height } = useWindowSize();

  const [mouseX, mouseY] = useWindowMousePosition();

  const { beta, gamma } = useDeviceOrientation();
  const hasAccelerometer = beta != null;

  // Prefer accelerometer-based offset control
  if (hasAccelerometer) {
    // [-180, 180) -> [-1, 1)
    let betaNormalized = (beta || 0) / 180;

    // [ -90,  90) -> [-1, 1)
    let gammaNormalized = (gamma || 0) / 90;

    // Fix clipping issues
    if (Math.abs(betaNormalized) > 0.5) {
      betaNormalized = 2 * (Math.sign(betaNormalized) - betaNormalized);
      gammaNormalized *= -1;
    }

    if (width < height) {
      // The standard orientation of devices is typically portrait
      offsetX = gammaNormalized;
      offsetY = betaNormalized;
    } else {
      // Take landscape orientation into account
      offsetX = betaNormalized;
      offsetY = gammaNormalized;
    }
  } else if (mouseY != null) {
    // [0,  width] -> [ -0.5,  0.5]
    offsetX = (mouseX as number) / width - 0.5;

    // [0, height] -> [-0.25, 0.25] with reduced sensitivity
    offsetY = (mouseY / height - 0.5) / 2;
  }

  return (
    <ParallaxWrapper as={FullHeight}>
      <ParallaxLayer src={BackgroundURL} />
      <ParallaxLayer
        src={StarsURL}
        translateX={-0.05 * offsetX}
        translateY={-0.05 * offsetY}
        sizeOverhead={0.1}
      />
      <ParallaxLayer
        src={PlanetsURL}
        translateX={0.01 * offsetX}
        translateY={-0.01 * offsetY}
        sizeOverhead={0.02}
      />
      <ParallaxLayer src={SurfaceURL} />
      <ParallaxLayer
        src={FlyingSaucerURL}
        position="50% 60%"
        size="15vmin"
        {...!hasAccelerometer && {
          translateX: 0.15 * offsetX,
          translateY: 0.15 * offsetY,
        }}
      />
      <ParallaxLayer src={RocketURL} position="100% 100%" size="70vmin" />
      <ParallaxLayer
        src={ThinkingMonsterURL}
        position="20% 100%"
        size="30vmin"
      />

      <HeroChildrenWrapper>{children}</HeroChildrenWrapper>
    </ParallaxWrapper>
  );
}
