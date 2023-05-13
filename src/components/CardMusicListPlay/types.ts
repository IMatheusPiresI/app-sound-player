import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  music: IMusic;
  onPlay: (music: IMusic) => void;
};

type IViewProps = {
  music: IMusic;
  onPlay: (music: IMusic) => void;
};

export { IProps, IViewProps };
