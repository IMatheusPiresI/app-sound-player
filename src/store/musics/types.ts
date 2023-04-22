import { IMusic } from '@components/CarouselMusic/types';

type IAudioPlayerState = {
  allMusics: IMusic[];
  error: boolean;
  setAllMusics: (allMusics: IMusic[]) => void;
  setErrorGetMusics: (error: boolean) => void;
};

export { IAudioPlayerState };
