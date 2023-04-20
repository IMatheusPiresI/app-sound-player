import { Track } from 'react-native-track-player';

type IProps = {
  idMusicSelected: number;
  setMusicId: React.Dispatch<React.SetStateAction<number>>;
};

type IViewProps = {
  handleGoNextSong: () => Promise<void>;
  handleGoPrevSong: () => Promise<void>;
  handleTogglePlay: () => Promise<void>;
};

type ITrack = {
  id: string;
} & Track;

export { IProps, IViewProps, ITrack };
