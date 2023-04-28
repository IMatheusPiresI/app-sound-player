import { SharedValue } from 'react-native-reanimated';

import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  scrollAnimate: SharedValue<number>;
};

type IViewProps = {
  rAnimatedBoxBanner: {
    transform: {
      translateY: number;
    }[];
    opacity: number;
    height: number;
  };
  rAnimatedImageBanner: {
    transform: {
      scaleX: number;
    }[];
  };
  randomSong: IMusic;
  handlePlayMusicToFavorites: () => void;
};

export { IProps, IViewProps };
