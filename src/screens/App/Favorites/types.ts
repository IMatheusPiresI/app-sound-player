import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { SharedValue } from 'react-native-reanimated';

import { IMusic } from '@components/CarouselMusic/types';

type IViewProps = {
  favoriteMusics: IMusic[];
  scrollAnimate: SharedValue<number>;
  rAnimatedSearchBox: {
    top: number;
    opacity: number;
  };
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

export { IViewProps };
