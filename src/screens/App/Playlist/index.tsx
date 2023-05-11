import React, { createElement, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { IPlaylist } from '@services/firebase/collections/users/types';

import { IViewProps } from './types';
import View from './view';

const Playlist: React.FC = () => {
  const route = useRoute();
  const { playlist } = route.params as { playlist: IPlaylist };
  const navigation = useNavigation();
  const [showModalAddMusic, setShowModalAddMusic] = useState<boolean>(false);

  const handleCloseModalAddMusic = () => {
    setShowModalAddMusic(false);
  };
  const handleOpenModalAddMusic = () => {
    setShowModalAddMusic(true);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const viewProps: IViewProps = {
    playlist,
    showModalAddMusic,
    handleGoBack,
    handleCloseModalAddMusic,
    handleOpenModalAddMusic,
  };

  return createElement(View, viewProps);
};

export default Playlist;
