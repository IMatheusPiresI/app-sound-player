import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const EmptyFavorite: React.FC<IProps> = ({ title }) => {
  const viewProps: IViewProps = { title };

  return createElement(View, viewProps);
};
