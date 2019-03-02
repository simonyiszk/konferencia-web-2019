import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const ParallaxWrapper = styled.div<Props>`
  position: relative;
`;

export default ParallaxWrapper;
