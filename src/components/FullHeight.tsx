import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

type BaseProps = {
  minHeight: string;
};

const FullHeightBase = styled.div<BaseProps>`
  min-height: ${({ minHeight }) => minHeight};
`;

export default function FullHeight(props: Props) {
  const [windowInnerHeight, setWindowInnerHeight] = useState(
    typeof window !== 'undefined' ? `${window.innerHeight}px` : '100vh',
  );

  function handleResize() {
    setWindowInnerHeight(`${window.innerHeight}px`);
  }

  // Address iOS Safari viewport height bug
  // Reference: https://medium.com/@susiekim9/how-to-compensate-for-the-ios-viewport-unit-bug-46e78d54af0d
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return <FullHeightBase minHeight={windowInnerHeight} {...props} />;
}
