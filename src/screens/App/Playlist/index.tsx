import React, { createElement, useMemo, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useUserStore } from '@store/user';
import { usePlaylistStore } from '@store/playlist';

import { IViewProps } from './types';
import View from './view';

const Playlist: React.FC = () => {
  const {
    user: { playlists },
  } = useUserStore();
  const route = useRoute();
  const { playlistID } = route.params as { playlistID: string };
  const navigation = useNavigation();
  const [showModalAddMusic, setShowModalAddMusic] = useState<boolean>(false);
  const { changePlayList } = usePlaylistStore();

  const playlist = useMemo(() => {
    const selectedPlaylist = playlists.filter((pl) => pl.id === playlistID);

    return selectedPlaylist[0];
  }, [playlistID, playlists]);

  const handlePlayPlaylist = () => {
    changePlayList(playlist.musics);
    navigation.navigate('Music', { music: playlist.musics[0] });
  };

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
    handlePlayPlaylist,
    handleCloseModalAddMusic,
    handleOpenModalAddMusic,
  };

  return createElement(View, viewProps);
};

export default Playlist;
