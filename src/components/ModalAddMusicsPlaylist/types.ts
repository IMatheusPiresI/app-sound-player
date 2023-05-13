import { IMusic } from '@components/CarouselMusic/types';
import { IPlaylist } from '@services/firebase/collections/users/types';

type IProps = {
  isVisible: boolean;
  handleClose: () => void;
  handleAttMusicsLocal: (musics: IMusic[]) => void;
  playlist: IPlaylist;
};

type IViewProps = {
  isVisible: boolean;
  selectedMusics: IMusic[];
  musicsWithoutPlaylist: IMusic[];
  loading: boolean;
  handleAddMusicsPlaylist: () => void;
  handleToogleSelectMusic: (music: IMusic) => void;
  handleCloseModal: () => void;
};

export { IProps, IViewProps };
