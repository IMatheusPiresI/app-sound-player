import React, { createElement } from 'react';

import View from './view';
import { IProps, IViewProps } from './types';

export const CarouselBanner: React.FC<IProps> = ({}) => {
  const viewProps: IViewProps = {};

  return createElement(View, viewProps);
};
