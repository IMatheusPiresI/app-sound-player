import { TouchableOpacityProps } from 'react-native';
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
} & TouchableOpacityProps;

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
} & TouchableOpacityProps;

export { IProps, IViewProps };
