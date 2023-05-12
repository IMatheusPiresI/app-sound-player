import React, { createElement } from 'react';

import { useNavigation } from '@react-navigation/native';

import { IProps, IViewProps } from './types';
import View from './view';

export const CardPlaylist: React.FC<IProps> = ({ playlist }) => {
  const navigation = useNavigation();

  const handleGoToPlaylist = () => {
    navigation.navigate('Playlist', {
      playlistID: playlist.id,
    });
  };
  const viewProps: IViewProps = { playlist, handleGoToPlaylist };

  return createElement(View, viewProps);
};
