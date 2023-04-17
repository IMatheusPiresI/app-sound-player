import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const Player: React.FC<IProps> = ({
  handleGoNextSong,
  handleGoPrevSong,
  handleTogglePlay,
  isPlaying,
}) => {
  const viewProps: IViewProps = {
    handleGoNextSong,
    handleGoPrevSong,
    handleTogglePlay,
    isPlaying,
  };

  return createElement(View, viewProps);
};
