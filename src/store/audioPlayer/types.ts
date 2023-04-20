import { IMusic } from '@components/CarouselMusic/types';

type IAudioPlayerState = {
  currentMusic: IMusic | null;
  showAudioPlayer: boolean;
  changeCurrentMusic: (musicId: string) => void;
  openAudioPlayer: () => void;
  closeAudioPlayer: () => void;
};

export { IAudioPlayerState };
