import { IMusic } from '@components/CarouselMusic/types';

type IViewProps = {
  handleGoBack: () => void;
  setMusicId: React.Dispatch<React.SetStateAction<number>>;
  currentSong: IMusic;
  selectedMusicId: number;
};

export { IViewProps };