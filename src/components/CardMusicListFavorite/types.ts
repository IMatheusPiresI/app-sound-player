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
  showModalRemoveFavorite: boolean;
  deleteAnimate: () => void;
  handlePlayMusicToFavorites: () => void;
  handleShowModalRemoveFavorite: () => void;
  handleCloseModalRemoveFavorite: () => void;
};

export { IProps, IViewProps };
