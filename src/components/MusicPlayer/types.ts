import { Track } from 'react-native-track-player';

type IProps = {
  idMusicSelected: number;
  setMusicId: React.Dispatch<React.SetStateAction<number>>;
};

type IViewProps = {
  handleGoNextSong: () => Promise<void>;
  handleGoPrevSong: () => Promise<void>;
  handleTogglePlay: () => Promise<void>;
  isPlaying: boolean;
};

type ITrack = {
  id: number;
} & Track;

export { IProps, IViewProps, ITrack };
