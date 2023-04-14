import React, { createElement } from 'react';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardGenre: React.FC<IProps> = ({ genre }) => {
  const viewProps: IViewProps = { genre };

  return createElement(View, viewProps);
};
