type IProps = {
  imagePlaylist: string | null;
  playlistName: string;
  setPlaylistName: React.Dispatch<React.SetStateAction<string>>;
  setImagePlaylist: React.Dispatch<React.SetStateAction<string | null>>;
};

type IViewProps = {
  imagePlaylist: string | null;
  playlistName: string;
  setPlaylistName: React.Dispatch<React.SetStateAction<string>>;
  handleOpenGallery: () => void;
};

export { IProps, IViewProps };
