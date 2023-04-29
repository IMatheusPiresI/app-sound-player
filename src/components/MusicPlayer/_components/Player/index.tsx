import React, { createElement } from 'react';
import { State, usePlaybackState } from 'react-native-track-player';

import { IProps, IViewProps } from './types';
import View from './view';

export const Player: React.FC<IProps> = ({
  handleGoNextSong,
  handleGoPrevSong,
  handleTogglePlay,
}) => {
  const playerState = usePlaybackState();
  const isPaused = playerState === State.Paused;

  const viewProps: IViewProps = {
    handleGoNextSong,
    handleGoPrevSong,
    handleTogglePlay,
    isPaused,
  };

  return createElement(View, viewProps);
};
