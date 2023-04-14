import React, { createElement } from 'react';

import { IViewProps } from './types';
import View from './view';
export const GenreSection: React.FC = () => {
  const viewProps: IViewProps = {};

  return createElement(View, viewProps);
};
