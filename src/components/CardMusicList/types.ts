import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  music: IMusic;
};

type IViewProps = {
  music: IMusic;
  rAnimatedRemoveFavorite: {
    height: number;
    transform: {
      translateX: number;
    }[];
  };
  deleteAnimate: () => void;
  handlePlayMusicToFavorites: () => void;
};

export { IProps, IViewProps };
