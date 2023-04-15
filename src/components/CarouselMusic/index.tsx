import React, { createElement, useRef } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';

import metrics from '@resources/theme/metrics';

import View from './view';
import { IProps, IViewProps } from './types';

export const CarouselMusic: React.FC<IProps> = ({}) => {
  const scrollRef = useRef<FlatList>(null);
  const translateX = useSharedValue(0);
  const spacing = 40.200000000000045;

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    translateX.value = event.nativeEvent.contentOffset.x;
  };

  const activeIndex = useDerivedValue(
    () => translateX.value / (metrics.screenWidth70 + spacing),
  );

  const viewProps: IViewProps = {
    scrollRef,
    onScroll,
    activeIndex,
  };

  return createElement(View, viewProps);
};
