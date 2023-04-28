import React, { createElement } from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { useNavigation } from '@react-navigation/native';
import { usePlaylistStore } from '@store/playlist';
import { useUserStore } from '@store/user';
import { removeMusicToFavorite } from '@services/firebase/collections/users';
import metrics from '@resources/theme/metrics';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardMusicList: React.FC<IProps> = ({ music }) => {
  const cardAnimate = useSharedValue(0);
  const { user, removeMusicToFavorites } = useUserStore((state) => state);
  const { playlistType, changePlayList } = usePlaylistStore((state) => state);
  const navigation = useNavigation();
  const playbackState = usePlaybackState();

  const deleteAnimate = () => {
    cardAnimate.value = withTiming(1, { duration: 500 });
  };

  const returnAnimate = () => {
    cardAnimate.value = withTiming(0, { duration: 500 });
  };

  const handleRemoveMusicToFavorite = async () => {
    try {
      deleteAnimate();
      await removeMusicToFavorite(user.id, music);
      setTimeout(() => {
        removeMusicToFavorites(music);
      }, 500);
    } catch (err) {
      returnAnimate();
    }
  };

  const handlePlayMusicToFavorites = async () => {
    if (playlistType !== 'Favorites' && playbackState !== State.None) {
      await TrackPlayer.reset();
    }
    if (playlistType !== 'Favorites') {
      changePlayList(user.favorites);
    }
    navigation.navigate('Music', {
      music,
    });
  };

  const rAnimatedRemoveFavorite = useAnimatedStyle(() => ({
    height: interpolate(cardAnimate.value, [0, 1], [64, 0]),
    transform: [
      {
        translateX: interpolate(
          cardAnimate.value,
          [0, 1],
          [0, -metrics.screenWidth],
        ),
      },
    ],
    opacity: interpolate(cardAnimate.value, [0, 0.8], [1, 0]),
  }));

  const viewProps: IViewProps = {
    music,
    rAnimatedRemoveFavorite,
    deleteAnimate: handleRemoveMusicToFavorite,
    handlePlayMusicToFavorites,
  };

  return createElement(View, viewProps);
};
