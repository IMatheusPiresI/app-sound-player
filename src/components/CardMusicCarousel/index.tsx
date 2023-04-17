import React, { createElement } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardMusicCarousel: React.FC<IProps> = ({
  activeIndex,
  index,
  music,
  ...rest
}) => {
  const rAnimatedCardVisible = useAnimatedStyle(() => ({
    height: interpolate(
      activeIndex.value,
      [-1, index - 1, index, index + 1],
      [250, 250, 325, 250],
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      },
    ),
    shadowRadius: interpolate(
      activeIndex.value,
      [-1, index - 1, index, index + 1],
      [0, 0, 8, 0],
      {
        extrapolateRight: Extrapolate.CLAMP,
        extrapolateLeft: Extrapolate.CLAMP,
      },
    ),
  }));
  const viewProps: IViewProps = {
    rAnimatedCardVisible,
    music,
    ...rest,
  };

  return createElement(View, viewProps);
};
