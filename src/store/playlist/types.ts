import { IMusic } from '@components/CarouselMusic/types';

type IPlayListState = {
  currentPlaylist: IMusic[];
  playlistType: 'AllMusics' | 'Favorites' | 'Initial';
  changePlayList: (playlist: IMusic[]) => void;
};

export { IPlayListState };
