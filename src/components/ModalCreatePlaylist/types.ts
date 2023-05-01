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
    left: number;
    opacity: number;
  };
  rAnimateFormCreatePlaylist: {
    left: number;
    opacity: number;
  };
  handleNextStep: () => void;
  setPlaylistName: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
  setImagePlaylist: React.Dispatch<React.SetStateAction<string | null>>;
};

export { IProps, IViewProps };
