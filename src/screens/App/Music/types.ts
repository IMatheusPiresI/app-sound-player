import { IMusic } from '@components/CarouselMusic/types';

type IViewProps = {
  handleGoBack: () => void;
  setMusicId: React.Dispatch<React.SetStateAction<number>>;
  handleToogleFavorite: () => void;
  isFavorited: boolean;
  currentSong: IMusic;
  selectedMusicId: number;
  playList: IMusic[];
};

export { IViewProps };
