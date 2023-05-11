import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  isVisible: boolean;
  handleClose: () => void;
};

type IViewProps = {
  isVisible: boolean;
  imagePlaylist: string | null;
  playlistName: string;
  validStep: boolean;
  rAnimateSelectMusics: {
    transform: {
      translateX: number;
    }[];
    opacity: number;
    zIndex: number;
  };
  rAnimateFormCreatePlaylist: {
    transform: {
      translateX: number;
    }[];
    opacity: number;
    left: number;
  };
  loading: boolean;
  selectedMusics: IMusic[];
  handleNextStep: () => void;
  handleCreatePlaylist: () => void;
  handleToogleSelectMusic: (music: IMusic) => void;
  setPlaylistName: React.Dispatch<React.SetStateAction<string>>;
  handleCloseModal: () => void;
  setImagePlaylist: React.Dispatch<React.SetStateAction<string | null>>;
};

export { IProps, IViewProps };
