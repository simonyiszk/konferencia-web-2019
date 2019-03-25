import React from 'react';
import styled from 'styled-components';

type FullHeightProps = {
  children: React.ReactNode;
};

const FullHeight = styled.div<FullHeightProps>`
  height: 100vh;
`;

export default FullHeight;
