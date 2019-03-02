import useDeviceOrientation from '@rehooks/device-orientation';
import useWindowSize from '@rehooks/window-size';
import React from 'react';
import styled from 'styled-components';
import FullHeight from './FullHeight';
import ParallaxLayer from './ParallaxLayer';
import ParallaxWrapper from './ParallaxWrapper';

import BGLayer01URL from '../assets/hero/01-background.svg';
import BGLayer02URL from '../assets/hero/02-stripes.svg';
import BGLayer03URL from '../assets/hero/03-stars.svg';
import BGLayer04URL from '../assets/hero/04-planets.svg';
import BGLayer05URL from '../assets/hero/05-flying-saucer.svg';
import BGLayer06URL from '../assets/hero/06-ground.svg';
import BGLayer07URL from '../assets/hero/07-rocks.svg';
import BGLayer08URL from '../assets/hero/08-rocket.svg';
import BGLayer09URL from '../assets/hero/09-thinking-monster.svg';

type Props = {
  children: React.ReactNode;
};

const HeroChildrenWrapper = styled.div`
  position: relative;
  padding-top: 3em;
  color: white;
  text-align: center;
  text-shadow: 0 0 0.25em #00000055;
`;

export default function Hero({ children }: Props) {
  // TODO: Remove typeof check when https://github.com/rehooks/window-size/pull/7 gets merged
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const windowSize = typeof window !== 'undefined' && useWindowSize();

  const { beta, gamma } = useDeviceOrientation();
  const betaNormalized = (beta || 0) / 180;
  const gammaNormalized = (gamma || 0) / 90;

  // The standard orientation of devices is typically portrait
  let offsetX = betaNormalized;
  let offsetY = gammaNormalized;

  // Take landscape orientation into account if necessary
  if (windowSize && windowSize.innerWidth < windowSize.innerHeight) {
    offsetX = gammaNormalized;
    offsetY = betaNormalized;
  }

  return (
    <ParallaxWrapper as={FullHeight}>
      <ParallaxLayer src={BGLayer01URL} />
      <ParallaxLayer src={BGLayer02URL} />
      <ParallaxLayer
        src={BGLayer03URL}
        translateX={0.05 * offsetX}
        translateY={0.05 * offsetY}
      />
      <ParallaxLayer
        src={BGLayer04URL}
        translateX={0.02 * offsetX}
        translateY={0.02 * offsetY}
      />
      <ParallaxLayer src={BGLayer05URL} position="50% 60%" size="15vmin" />
      <ParallaxLayer src={BGLayer06URL} />
      <ParallaxLayer src={BGLayer07URL} />
      <ParallaxLayer src={BGLayer08URL} position="100% 100%" size="70vmin" />
      <ParallaxLayer src={BGLayer09URL} position="20% 100%" size="30vmin" />

      <HeroChildrenWrapper>{children}</HeroChildrenWrapper>
    </ParallaxWrapper>
  );
}
