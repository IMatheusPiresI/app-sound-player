import React, { createElement } from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';

import { useNavigation } from '@react-navigation/native';
import { usePlaylistStore } from '@store/playlist';
import { useUserStore } from '@store/user';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardMusicList: React.FC<IProps> = ({ music }) => {
  const { user } = useUserStore((state) => state);
  const { playlistType, changePlayList } = usePlaylistStore((state) => state);
  const navigation = useNavigation();
  const playbackState = usePlaybackState();

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

  const viewProps: IViewProps = { music, handlePlayMusicToFavorites };

  return createElement(View, viewProps);
};
