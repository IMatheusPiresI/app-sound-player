type IProps = {
  handleGoNextSong: () => Promise<void>;
  handleGoPrevSong: () => Promise<void>;
  handleTogglePlay: () => Promise<void>;
};

type IViewProps = {
  handleGoNextSong: () => Promise<void>;
  handleGoPrevSong: () => Promise<void>;
  handleTogglePlay: () => Promise<void>;
  isPaused: boolean;
};

export { IProps, IViewProps };
