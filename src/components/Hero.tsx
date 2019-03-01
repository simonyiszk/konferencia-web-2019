import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

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

const HeroBase = styled.div<Props & { minHeight: string }>`
  min-height: ${({ minHeight }) => minHeight};
  background: url(${BGLayer09URL}) 20% 100% / 30vmin no-repeat,
    url(${BGLayer08URL}) 100% 100% / 70vmin no-repeat,
    url(${BGLayer07URL}) center / cover, url(${BGLayer06URL}) center / cover,
    url(${BGLayer05URL}) 50% 60% / 15vmin no-repeat,
    url(${BGLayer04URL}) center / cover, url(${BGLayer03URL}) center / cover,
    url(${BGLayer02URL}) center / cover, url(${BGLayer01URL}) center / cover;
  color: white;
  ${space};
  text-align: center;
  text-shadow: 0 0 0.25em #00000055;
`;

export default function Hero(props: Props) {
  const [windowInnerHeight, setWindowInnerHeight] = useState('100vh');

  function handleResize() {
    setWindowInnerHeight(`${window.innerHeight}px`);
  }

  // Address iOS Safari viewport height bug
  // Reference: https://medium.com/@susiekim9/how-to-compensate-for-the-ios-viewport-unit-bug-46e78d54af0d
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return <HeroBase minHeight={windowInnerHeight} {...props} />;
}
