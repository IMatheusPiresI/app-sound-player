import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  music: IMusic;
};

type IViewProps = {
  music: IMusic;
  handlePlayMusicToFavorites: () => void;
};

export { IProps, IViewProps };
