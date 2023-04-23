import React, { createElement } from 'react';

import { useUserStore } from '@store/user';

import { IViewProps } from './types';
import View from './view';

const Favorites: React.FC = () => {
  const { user } = useUserStore((state) => state);

  const favoriteMusics = user.favorites;
  const viewProps: IViewProps = {
    favoriteMusics,
  };

  return createElement(View, viewProps);
};

export default Favorites;
