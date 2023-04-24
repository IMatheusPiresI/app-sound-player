import React, { createElement, useRef } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useDerivedValue, useSharedValue } from 'react-native-reanimated';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';

import metrics from '@resources/theme/metrics';
import { useNavigation } from '@react-navigation/native';
import { useMusicStore } from '@store/musics';
import { usePlaylistStore } from '@store/playlist';

import View from './view';
import { IMusic, IProps, IViewProps } from './types';
export const CarouselMusic: React.FC<IProps> = ({}) => {
  const { allMusics } = useMusicStore((state) => state);
  const { playlistType, changePlayList } = usePlaylistStore((state) => state);
  const navigation = useNavigation();
  const scrollRef = useRef<FlatList>(null);
  const translateX = useSharedValue(0);
  const spacing = 40.200000000000045;
  const playbackState = usePlaybackState();
  const handleGoToMusic = async (music: IMusic) => {
    if (playlistType !== 'AllMusics') {
      changePlayList(allMusics);
    }

    if (playbackState !== State.None && playlistType !== 'AllMusics') {
      await TrackPlayer.reset();
    }

    navigation.navigate('Music', { music });
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    translateX.value = event.nativeEvent.contentOffset.x;
  };

  const activeIndex = useDerivedValue(
    () => translateX.value / (metrics.screenWidth70 + spacing),
  );

  const viewProps: IViewProps = {
    scrollRef,
    activeIndex,
    allMusics,
    onScroll,
    handleGoToMusic,
  };

  return createElement(View, viewProps);
};
