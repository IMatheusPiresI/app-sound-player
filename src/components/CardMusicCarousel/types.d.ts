import Animated from 'react-native-reanimated';

type IProps = {
  index: number;
  activeIndex: Readonly<Animated.SharedValue<number>>;
  music: {
    id: string;
    imageBanner: string;
    musicName: string;
    musicGenre: string;
  };
};

type IViewProps = {
  rAnimatedCardVisible: {
    height: number;
  };
  music: {
    id: string;
    imageBanner: string;
    musicName: string;
    musicGenre: string;
  };
};

export { IProps, IViewProps };
