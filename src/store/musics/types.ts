import { IMusic } from '@components/CarouselMusic/types';

type IAudioPlayerState = {
  allMusics: IMusic[];
  setAllMusics: (allMusics: IMusic[]) => void;
};

export { IAudioPlayerState };
