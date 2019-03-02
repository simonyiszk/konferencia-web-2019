import useDeviceOrientation from '@rehooks/device-orientation';
import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import FullHeight from './FullHeight';

import BGLayer01URL from '../assets/hero/01-background.svg';
import BGLayer02URL from '../assets/hero/02-stripes.svg';
import BGLayer03URL from '../assets/hero/03-stars.svg';
import BGLayer04URL from '../assets/hero/04-planets.svg';
import BGLayer05URL from '../assets/hero/05-flying-saucer.svg';
import BGLayer06URL from '../assets/hero/06-ground.svg';
import BGLayer07URL from '../assets/hero/07-rocks.svg';
import BGLayer08URL from '../assets/hero/08-rocket.svg';
import BGLayer09URL from '../assets/hero/09-thinking-monster.svg';

type Props = SpaceProps;

type BaseProps = {
  gammaNormalized: number;
};

const HeroBase = styled.div<BaseProps>`
  background: url(${BGLayer09URL}) 20% 100% / 30vmin no-repeat,
    url(${BGLayer08URL}) 100% 100% / 70vmin no-repeat,
    url(${BGLayer07URL}) center / cover, url(${BGLayer06URL}) center / cover,
    url(${BGLayer05URL}) 50% 60% / 15vmin no-repeat,
    url(${BGLayer04URL}) center / cover,
    url(${BGLayer03URL}) ${({ gammaNormalized }) => 50 + 10 * gammaNormalized}%
      50% / cover,
    url(${BGLayer02URL}) center / cover, url(${BGLayer01URL}) center / cover;
  color: white;
  ${space};
  text-align: center;
  text-shadow: 0 0 0.25em #00000055;
`;

export default function Hero(props: Props) {
  const { gamma } = useDeviceOrientation();
  const gammaNormalized = gamma != null ? gamma / 90 : 0;

  return (
    <HeroBase as={FullHeight} gammaNormalized={gammaNormalized} {...props} />
  );
}
