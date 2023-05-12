import { IPlaylist } from '@services/firebase/collections/users/types';

type IViewProps = {
  playlist: IPlaylist;
  showModalAddMusic: boolean;
  handlePlayPlaylist: () => void;
  handleCloseModalAddMusic: () => void;
  handleOpenModalAddMusic: () => void;
  handleGoBack: () => void;
};

export { IViewProps };
