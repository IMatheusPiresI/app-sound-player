import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Animated from 'react-native-reanimated';

type IProps = {};

type IViewProps = {
  scrollRef: React.RefObject<FlatList<any>>;
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  activeIndex: Readonly<Animated.SharedValue<number>>;
  handleGoToMusic: (music: IMusic) => void;
};

type IMusic = {
  id: string;
  imageBanner: string;
  musicName: string;
  musicGenre: string;
  creator: string;
};

export { IProps, IViewProps, IMusic };
