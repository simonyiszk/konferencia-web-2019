import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const FullHeight = styled.div<Props>`
  min-height: 100vh;
`;

export default FullHeight;
