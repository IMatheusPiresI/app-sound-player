import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardMusicListPlay: React.FC<IProps> = ({ music, onPlay }) => {
  const viewProps: IViewProps = {
    music,
    onPlay,
  };

  return createElement(View, viewProps);
};
