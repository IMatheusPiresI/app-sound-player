import { IMusic } from '@components/CarouselMusic/types';
import { IPlaylist } from '@services/firebase/collections/users/types';

type IViewProps = {
  playlistOpen: IPlaylist;
  showModalAddMusic: boolean;
  loading: boolean;
  showModalExclude: boolean;
  handlePlayPlaylist: () => void;
  handleAttMusicsLocal: (musics: IMusic[]) => void;
  handleAttDeleteMusicLocal: (musics: IMusic) => void;
  handleDeletePlaylist: () => void;
  handleCloseModalAddMusic: () => void;
  handleOpenModalAddMusic: () => void;
  handleGoBack: () => void;
  handleShowModalExclude: () => void;
  handleCloseModalExclude: () => void;
};

export { IViewProps };
