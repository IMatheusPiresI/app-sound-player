import React, { createElement, useState } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

import { useUserStore } from '@store/user';
import { filterSortMusicsByNameAndCreator } from '@resources/utils/filterSortMusicsByNameAndCreator';

import { IViewProps } from './types';
import View from './view';

const Favorites: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const scrollAnimate = useSharedValue(0);
  const { user } = useUserStore((state) => state);
  const favoriteMusics = filterSortMusicsByNameAndCreator(
    user.favorites,
    search,
  );

  const scrollHandler = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollAnimate.value = event.nativeEvent.contentOffset.y;
  };

  const rAnimatedSearchBox = useAnimatedStyle(() => ({
    top: interpolate(scrollAnimate.value, [0, 10], [0, -15], Extrapolate.CLAMP),
    opacity: interpolate(scrollAnimate.value, [0, 15], [1, 0]),
  }));

  const viewProps: IViewProps = {
    favoriteMusics,
    rAnimatedSearchBox,
    scrollAnimate,
    search,
    setSearch,
    scrollHandler,
  };

  return createElement(View, viewProps);
};

export default Favorites;
