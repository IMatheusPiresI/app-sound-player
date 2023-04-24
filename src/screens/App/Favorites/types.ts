import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { IMusic } from '@components/CarouselMusic/types';

type IViewProps = {
  favoriteMusics: IMusic[];
  rAnimatedImageBanner: {
    height: number;
  };
  rAnimatedSearchBox: {
    height: number;
  };

  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

export { IViewProps };
