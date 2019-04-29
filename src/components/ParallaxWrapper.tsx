import styled from 'styled-components';

interface ParallaxWrapperProps {
  children: React.ReactNode;
}

const ParallaxWrapper = styled.div<ParallaxWrapperProps>`
  position: relative;
  overflow: hidden;
`;

export default ParallaxWrapper;
