import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardMusicList: React.FC<IProps> = ({ music }) => {
  const viewProps: IViewProps = { music };

  return createElement(View, viewProps);
};
