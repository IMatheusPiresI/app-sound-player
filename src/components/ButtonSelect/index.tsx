import React, { createElement, useEffect } from 'react';
import {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import View from './view';
import { IProps, IViewProps } from './types';

export const ButtonSelect: React.FC<IProps> = ({
  title,
  option,
  selectOption,
}) => {
  const selectedAnimate = useSharedValue(0);

  const handleSelectOption = () => {
    selectOption(title);
  };

  const rAnimatedText = useAnimatedStyle(() => {
    const color = interpolateColor(
      selectedAnimate.value,
      [0, 1],
      ['#fff7', '#fff'],
    );

    return {
      color,
      fontSize: interpolate(selectedAnimate.value, [0, 1], [18, 26]),
      fontWeight: 'bold',
    };
  });

  const rAnimatedView = useAnimatedStyle(() => ({
    position: 'absolute',
    top: interpolate(selectedAnimate.value, [0, 1], [0, -15]),
  }));

  useEffect(() => {
    const duration = option.initial ? 50 : 500;
    if (title === option.selectedOption) {
      selectedAnimate.value = withTiming(1, { duration: duration });
      return;
    }
    selectedAnimate.value = withTiming(0, { duration: duration });
  });

  const viewProps: IViewProps = {
    title,
    rAnimatedText,
    rAnimatedView,
    handleSelectOption,
  };

  return createElement(View, viewProps);
};
