import { extendTheme } from 'native-base';

import metrics from './metrics';

export const theme = extendTheme({
  sizes: {
    ...metrics,
  },
  space: {
    ...metrics,
  },
  config: {
    initialColorMode: 'light',
  },
});
