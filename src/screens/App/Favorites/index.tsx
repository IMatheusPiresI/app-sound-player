import React, { createElement } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { useUserStore } from '@store/user';
import metrics from '@resources/theme/metrics';

import { IViewProps } from './types';
import View from './view';

const Favorites: React.FC = () => {
  const scrollAnimate = useSharedValue(0);
  const { user } = useUserStore((state) => state);
  const favoriteMusics = user.favorites;

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      'worklet';
      scrollAnimate.value = event.contentOffset.y;
    },
  });
  const rAnimatedImageBanner = useAnimatedStyle(() => ({
    height: interpolate(
      scrollAnimate.value,
      [0, 80],
      [metrics.screenHeight25, 0],
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      },
    ),
    opacity: interpolate(scrollAnimate.value, [0, 60], [1, 0]),
  }));

  const rAnimatedSearchBox = useAnimatedStyle(() => ({
    top: interpolate(scrollAnimate.value, [0, 20], [0, -10], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    }),
    opacity: interpolate(scrollAnimate.value, [0, 12], [1, 0]),
    height: interpolate(scrollAnimate.value, [0, 20], [40, 0], {
      extrapolateRight: Extrapolate.CLAMP,
      extrapolateLeft: Extrapolate.CLAMP,
    }),
  }));

  const viewProps: IViewProps = {
    favoriteMusics,
    rAnimatedImageBanner,
    rAnimatedSearchBox,
    scrollHandler,
  };

  return createElement(View, viewProps);
};

export default Favorites;
