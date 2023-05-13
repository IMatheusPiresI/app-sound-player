import React, { createElement, useMemo } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';

import metrics from '@resources/theme/metrics';
import { useUserStore } from '@store/user';
import { usePlaylistStore } from '@store/playlist';
import { useNavigation } from '@react-navigation/native';

import { IProps, IViewProps } from './types';
import View from './view';

export const BannerFavoriteMusic: React.FC<IProps> = ({ scrollAnimate }) => {
  const playbackState = usePlaybackState();
  const navigation = useNavigation();
  const { user } = useUserStore();
  const { playlistId, changePlayList, changePlaylistId } = usePlaylistStore();

  const randomSong = useMemo(() => {
    const totalFavorites = user.favorites.length;

    const randonSongIndex = Math.ceil(Math.random() * totalFavorites - 1);

    return user.favorites[randonSongIndex];
  }, [user.favorites]);

  const handlePlayMusicToFavorites = async () => {
    if (playlistId !== 'Favorites' && playbackState !== State.None) {
      await TrackPlayer.reset();
    }
    if (playlistId !== 'Favorites') {
      changePlayList(user.favorites);
      changePlaylistId('Favorites');
    }
    navigation.navigate('Music', {
      music: randomSong,
    });
  };

  const rAnimatedImageBanner = useAnimatedStyle(() => ({
    transform: [
      {
        scaleX: interpolate(
          scrollAnimate.value,
          [0, metrics.screenHeight25],
          [1.2, 1],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  const rAnimatedBoxBanner = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollAnimate.value,
          [0, 80],
          [0, -50],
          Extrapolate.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      scrollAnimate.value,
      [0, metrics.screenHeight25 + 80],
      [1, 0],
      Extrapolate.CLAMP,
    ),
    height: interpolate(
      scrollAnimate.value,
      [40, metrics.screenHeight20 + 65],
      [metrics.screenHeight25, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const viewProps: IViewProps = {
    rAnimatedImageBanner,
    rAnimatedBoxBanner,
    randomSong,
    handlePlayMusicToFavorites,
  };

  return createElement(View, viewProps);
};
