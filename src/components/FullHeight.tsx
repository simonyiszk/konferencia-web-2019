import React from 'react';
import styled from 'styled-components';

interface FullHeightProps {
  children: React.ReactNode;
}

const FullHeight = styled.div<FullHeightProps>`
  min-height: 100vh;
`;

export default FullHeight;
