import { Box } from '@rebass/grid';
import styled from 'styled-components';

const Container = styled(Box)`
  padding-right: 1em;
  padding-right: calc(1em + env(safe-area-inset-right));

  padding-left: 1em;
  padding-left: calc(1em + env(safe-area-inset-left));
`;

export default Container;
