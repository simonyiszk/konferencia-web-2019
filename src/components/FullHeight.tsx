import useWindowSize from '@rehooks/window-size';
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

type BaseProps = {
  minHeight?: string;
};

const FullHeightBase = styled.div<BaseProps>`
  min-height: ${({ minHeight = '100vh' }) => minHeight};
`;

export default function FullHeight(props: Props) {
  // Address iOS Safari viewport height bug
  // TODO: Remove typeof check when https://github.com/rehooks/window-size/pull/7 gets merged
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const windowSize = typeof window !== 'undefined' && useWindowSize();

  return (
    <FullHeightBase
      minHeight={windowSize ? `${windowSize.innerHeight}px` : undefined}
      {...props}
    />
  );
}
