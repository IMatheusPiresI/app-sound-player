import React, { createElement } from 'react';

import { IViewProps } from './types';
import View from './view';

const Playlists: React.FC = () => {
  const viewProps: IViewProps = {};

  return createElement(View, viewProps);
};

export default Playlists;
