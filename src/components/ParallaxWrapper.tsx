import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const ParallaxWrapper = styled.div<Props>`
  position: relative;
  overflow: hidden;
`;

export default ParallaxWrapper;
