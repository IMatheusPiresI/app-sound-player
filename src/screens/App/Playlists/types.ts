import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

type IViewProps = {
  rAnimatedHideSearch: {
    transform: {
      translateY: number;
    }[];
    opacity: number;
  };
  rAnimatedNewPlaylist: {
    transform: {
      translateY: number;
    }[];
  };
  showModalCreatePlaylist: boolean;
  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  handleShowModalCreatePlaylist: () => void;
  handleCloseModalCreatePlaylist: () => void;
};

export { IViewProps };
