import React from 'react';
import styled from 'styled-components';

const EmbeddedVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`;

const EmbeddedVideoContent = styled.iframe.attrs({
  width: 560,
  height: 315,
  allow:
    'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
  allowFullScreen: true,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

interface EmbeddedVideoProps {
  src: string;
  title: string;
}

export default function EmbeddedVideo(props: EmbeddedVideoProps) {
  return (
    <EmbeddedVideoWrapper>
      <EmbeddedVideoContent {...props} />
    </EmbeddedVideoWrapper>
  );
}
