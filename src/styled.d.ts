import 'styled-components';
import { Theme } from 'styled-system';

declare module 'styled-components' {
  // eslint-disable-next-line import/prefer-default-export
  export interface DefaultTheme extends Theme {
    fontSizes: string[];
    transitionTimingFunctions: {
      decelerate: string;
    };
  }
}
