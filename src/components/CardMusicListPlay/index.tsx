import React, { createElement } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import metrics from '@resources/theme/metrics';
import { removeMusicToPlaylist } from '@services/firebase/collections/playlist';
import { IMusic } from '@components/CarouselMusic/types';
import { useUserStore } from '@store/user';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardMusicListPlay: React.FC<IProps> = ({
  music,
  playlistId,
  onPlay,
  onDelete,
}) => {
  const cardAnimate = useSharedValue(0);
  const { userRemoveMusicPlaylist } = useUserStore();
  const handleDeleteMusicPlaylist = async (musicRemove: IMusic) => {
    cardAnimate.value = withTiming(1, { duration: 500 });

    try {
      await removeMusicToPlaylist({
        musicId: musicRemove.id,
        playlistId,
      });

      setTimeout(() => {
        userRemoveMusicPlaylist(playlistId, music);
        onDelete(music);
      }, 500);
    } catch (err) {}
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
    onPlay,
    handleDeleteMusicPlaylist,
  };

  return createElement(View, viewProps);
};
