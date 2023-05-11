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
      base64: true,
    });

    if (result.assets) {
      setImagePlaylist(`data:image/png;base64,${result.assets[0].base64!}`);
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
