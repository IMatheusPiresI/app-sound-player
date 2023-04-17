type IProps = {
  handleGoNextSong: () => Promise<void>;
  handleGoPrevSong: () => Promise<void>;
  handleTogglePlay: () => Promise<void>;
  isPlaying: boolean;
};

type IViewProps = {
  handleGoNextSong: () => Promise<void>;
  handleGoPrevSong: () => Promise<void>;
  handleTogglePlay: () => Promise<void>;
  isPlaying: boolean;
};

export { IProps, IViewProps };
