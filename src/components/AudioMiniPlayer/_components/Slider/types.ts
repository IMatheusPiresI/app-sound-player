import { Progress } from 'react-native-track-player';

type IProps = {};

type IViewProps = {
  progress: Progress;
  onSlideComplete: (positionMusic: number[]) => void;
};

export { IProps, IViewProps };
