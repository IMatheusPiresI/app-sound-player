import React, { createElement } from 'react';

import * as ImagePicker from 'expo-image-picker';

import View from './view';
import { IProps, IViewProps } from './types';

export const FormCreatePlaylist: React.FC<IProps> = ({
  imagePlaylist,
  playlistName,
  setPlaylistName,
  setImagePlaylist,
}) => {
  const handleOpenGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (result.assets) {
      setImagePlaylist(result.assets[0].uri);
    }
  };

  const viewProps: IViewProps = {
    imagePlaylist,
    playlistName,
    setPlaylistName,
    handleOpenGallery,
  };

  return createElement(View, viewProps);
};
