import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { IPlaylist } from '@services/firebase/collections/users/types';

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
  playlists: IPlaylist[];
  playlistsFiltered: IPlaylist[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  scrollHandler: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  handleShowModalCreatePlaylist: () => void;
  handleCloseModalCreatePlaylist: () => void;
};

export { IViewProps };
