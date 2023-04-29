import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardPlaylist: React.FC<IProps> = () => {
  const viewProps: IViewProps = {};

  return createElement(View, viewProps);
};
