import useDeviceOrientation from '@rehooks/device-orientation';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { useResizeObserver } from 'use-events';
import { useWindowMousePosition } from '../utils/hooks';
import FullHeight from './FullHeight';
import ParallaxLayer from './ParallaxLayer';
import ParallaxWrapper from './ParallaxWrapper';

import BackgroundURL from '../assets/hero/01-background.svg';
import StripesURL from '../assets/hero/02-stripes.svg';
import StarsURL from '../assets/hero/03-stars.svg';
import PlanetsURL from '../assets/hero/04-planets.svg';
import FlyingSaucerURL from '../assets/hero/05-flying-saucer.svg';
import GroundURL from '../assets/hero/06-ground.svg';
import RocksURL from '../assets/hero/07-rocks.svg';
import RocketURL from '../assets/hero/08-rocket.svg';
import ThinkingMonsterURL from '../assets/hero/09-thinking-monster.svg';

type Props = {
  children: React.ReactNode;
};

const HeroChildrenWrapper = styled.div`
  position: relative;
  padding-top: 3em;
  color: white;
  text-align: center;
`;

export default function Hero({ children }: Props) {
  let offsetX = 0;
  let offsetY = 0;

  const ref = useRef(null);
  const [componentWidth, componentHeight] = useResizeObserver(ref);

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

    if (componentWidth < componentHeight) {
      // The standard orientation of devices is typically portrait
      offsetX = gammaNormalized;
      offsetY = betaNormalized;
    } else {
      // Take landscape orientation into account
      offsetX = betaNormalized;
      offsetY = gammaNormalized;
    }
  } else if (mouseY != null) {
    // [0,  componentWidth] -> [ -0.5,  0.5]
    offsetX = (mouseX as number) / componentWidth - 0.5;

    // [0, componentHeight] -> [-0.25, 0.25] with reduced sensitivity
    offsetY = ((mouseY + window.scrollY) / componentHeight - 0.5) / 2;
  }

  return (
    <ParallaxWrapper as={FullHeight} ref={ref}>
      <ParallaxLayer src={BackgroundURL} />
      <ParallaxLayer src={StripesURL} />
      <ParallaxLayer
        src={StarsURL}
        translateX={-0.05 * offsetX}
        translateY={-0.05 * offsetY}
        offsetRange={0.1}
      />
      <ParallaxLayer
        src={PlanetsURL}
        translateX={0.01 * offsetX}
        translateY={-0.01 * offsetY}
        offsetRange={0.02}
      />
      <ParallaxLayer src={GroundURL} />
      <ParallaxLayer src={RocksURL} />
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
