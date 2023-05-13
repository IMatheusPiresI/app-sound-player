import { State } from 'react-native-track-player';

import { IMusic } from '@components/CarouselMusic/types';

type IProps = {};

type IViewProps = {
  trackState: State;
  currentSong: IMusic | undefined;
  handleTogglePlaySong: () => void;
  handleNavigateToMusic: () => void;
  handleCloseMiniPlayerAndStopMusic: () => void;
};

export { IProps, IViewProps };
