import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import Animated from 'react-native-reanimated';

type IProps = {};

type IViewProps = {
  allMusics: IMusic[];
  activeIndex: Readonly<Animated.SharedValue<number>>;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  handleGoToMusic: (music: IMusic) => void;
};

type IMusic = {
  id: string;
  imageBanner: string;
  musicName: string;
  musicGenre: string;
  creator: string;
  url: string;
};

export { IProps, IViewProps, IMusic };
