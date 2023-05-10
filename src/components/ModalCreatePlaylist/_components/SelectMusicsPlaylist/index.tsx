import React, { createElement, useState } from 'react';

import { useMusicStore } from '@store/musics';

import View from './view';
import { IProps, IViewProps } from './types';

export const SelectMusicsPlaylist: React.FC<IProps> = ({
  selectedMusics,
  toggleSelectMusic,
}) => {
  const { allMusics } = useMusicStore();
  const [search, setSearch] = useState<string>('');
  const filteredMusics = allMusics.filter(
    (music) =>
      music.musicName.toLowerCase().includes(search.toLowerCase()) ||
      music.creator.toLowerCase().includes(search.toLowerCase()),
  );

  const viewProps: IViewProps = {
    allMusics,
    selectedMusics,
    filteredMusics,
    search,
    setSearch,
    toggleSelectMusic,
  };

  return createElement(View, viewProps);
};
