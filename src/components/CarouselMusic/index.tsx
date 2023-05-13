import React, { createElement } from 'react';
import {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
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
  const { playlistId, changePlayList, changePlaylistId } = usePlaylistStore(
    (state) => state,
  );
  const navigation = useNavigation();
  const translateX = useSharedValue(0);
  const spacing = 40.200000000000045;
  const playbackState = usePlaybackState();

  const handleGoToMusic = async (music: IMusic) => {
    if (playbackState !== State.None && playlistId !== 'AllMusics') {
      await TrackPlayer.reset();
    }

    if (playlistId !== 'AllMusics') {
      changePlayList(allMusics);
      changePlaylistId('AllMusics');
    }

    navigation.navigate('Music', { music });
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(
    () => translateX.value / (metrics.screenWidth70 + spacing),
  );

  const viewProps: IViewProps = {
    activeIndex,
    allMusics,
    onScroll,
    handleGoToMusic,
  };

  return createElement(View, viewProps);
};
