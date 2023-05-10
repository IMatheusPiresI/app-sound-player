import React, { createElement, useEffect } from 'react';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import View from './view';
import { IProps, IViewProps } from './types';

export const CardMusicSelect: React.FC<IProps> = ({
  music,
  isActive,
  ...rest
}) => {
  const activeAnimate = useSharedValue(0);

  const rAnimatedCheckBox = useAnimatedStyle(() => ({
    opacity: activeAnimate.value,
  }));

  const rAnimatedBorder = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      activeAnimate.value,
      [0, 1],
      ['#fff6', '#a5f8a8'],
    );

    return {
      borderWidth: 1,
      borderColor,
      borderRadius: 8,
    };
  });

  useEffect(() => {
    if (isActive) {
      activeAnimate.value = withTiming(1, { duration: 500 });
      return;
    }
    activeAnimate.value = withTiming(0, { duration: 500 });
  }, [activeAnimate, isActive]);

  const viewProps: IViewProps = {
    rAnimatedCheckBox,
    rAnimatedBorder,
    music,
    ...rest,
  };

  return createElement(View, viewProps);
};
