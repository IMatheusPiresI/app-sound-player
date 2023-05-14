import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  music: IMusic;
  playlistId: string;
  onPlay: (music: IMusic) => void;
  onDelete: (musics: IMusic) => void;
};

type IViewProps = {
  music: IMusic;
  rAnimatedRemoveFavorite: {
    height: number;
    transform: {
      translateX: number;
    }[];
    opacity: number;
  };
  showModalDelete: boolean;
  onPlay: (music: IMusic) => void;
  handleDeleteMusicPlaylist: () => void;
  handleShowModalExclude: () => void;
  handleCloseModalExclude: () => void;
};

export { IProps, IViewProps };
