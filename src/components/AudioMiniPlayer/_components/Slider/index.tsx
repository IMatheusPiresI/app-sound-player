import React, { createElement } from 'react';
import TrackPlayer, { useProgress } from 'react-native-track-player';

import { IProps, IViewProps } from './types';
import View from './view';

export const Slider: React.FC<IProps> = () => {
  const progress = useProgress();

  const onSlideComplete = async (positionMusic: number[]) => {
    await TrackPlayer.seekTo(positionMusic[0]);
  };

  const viewProps: IViewProps = {
    progress,
    onSlideComplete,
  };
  return createElement(View, viewProps);
};
