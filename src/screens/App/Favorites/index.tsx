import React, { createElement } from 'react';

import { IViewProps } from './types';
import View from './view';

const Favorites: React.FC = () => {
  const viewProps: IViewProps = {};

  return createElement(View, viewProps);
};

export default Favorites;
