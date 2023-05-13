import { IMusic } from '@components/CarouselMusic/types';

type IPlayListState = {
  currentPlaylist: IMusic[];
  playlistId: 'AllMusics' | 'Favorites' | 'Initial' | string;
  changePlayList: (playlist: IMusic[]) => void;
  changePlaylistId: (
    playlistId: 'AllMusics' | 'Favorites' | 'Initial' | string,
  ) => void;
};

export { IPlayListState };
