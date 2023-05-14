import React, { createElement, useState } from 'react';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import metrics from '@resources/theme/metrics';
import { removeMusicToPlaylist } from '@services/firebase/collections/playlist';
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
  const [showModalDelete, setShowModalDelete] = useState<boolean>(false);

  const handleShowModalExclude = () => {
    setShowModalDelete(true);
  };

  const handleCloseModalExclude = () => {
    setShowModalDelete(false);
  };

  const handleDeleteMusicPlaylist = async () => {
    handleCloseModalExclude();
    cardAnimate.value = withTiming(1, { duration: 500 });

    try {
      await removeMusicToPlaylist({
        musicId: music.id,
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
    showModalDelete,
    onPlay,
    handleDeleteMusicPlaylist,
    handleShowModalExclude,
    handleCloseModalExclude,
  };

  return createElement(View, viewProps);
};
