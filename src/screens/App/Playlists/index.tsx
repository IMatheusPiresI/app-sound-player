import React, { createElement, useState } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useUserStore } from '@store/user';

import { IViewProps } from './types';
import View from './view';

const Playlists: React.FC = () => {
  const {
    user: { playlists },
  } = useUserStore();
  const [showModalCreatePlaylist, setShowModalCreatePlaylist] =
    useState<boolean>(false);
  const scrollAnimate = useSharedValue(0);

  const handleShowModalCreatePlaylist = () => {
    setShowModalCreatePlaylist(true);
  };

  const handleCloseModalCreatePlaylist = () => {
    setShowModalCreatePlaylist(false);
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollAnimate.value = event.contentOffset.y;
    },
  });

  const rAnimatedHideSearch = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollAnimate.value,
          [0, 40],
          [0, -20],
          Extrapolate.CLAMP,
        ),
      },
    ],

    opacity: interpolate(
      scrollAnimate.value,
      [0, 30],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const rAnimatedNewPlaylist = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollAnimate.value,
          [0, 40],
          [0, -50],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const viewProps: IViewProps = {
    rAnimatedHideSearch,
    rAnimatedNewPlaylist,
    showModalCreatePlaylist,
    playlists,
    scrollHandler,
    handleShowModalCreatePlaylist,
    handleCloseModalCreatePlaylist,
  };

  return createElement(View, viewProps);
};

export default Playlists;
