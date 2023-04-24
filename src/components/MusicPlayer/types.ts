import { Track } from 'react-native-track-player';

import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  idMusicSelected: number;
  playList: IMusic[];
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
