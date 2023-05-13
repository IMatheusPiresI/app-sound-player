import React, { createElement, useState } from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';

import { useNavigation, useRoute } from '@react-navigation/native';
import { useUserStore } from '@store/user';
import { usePlaylistStore } from '@store/playlist';
import { deletePlaylist } from '@services/firebase/collections/playlist';
import { IPlaylist } from '@services/firebase/collections/users/types';
import { IMusic } from '@components/CarouselMusic/types';

import { IViewProps } from './types';
import View from './view';

const Playlist: React.FC = () => {
  const route = useRoute();
  const { playlist } = route.params as { playlist: IPlaylist };
  const navigation = useNavigation();
  const [showModalAddMusic, setShowModalAddMusic] = useState<boolean>(false);
  const { changePlayList, playlistId, changePlaylistId } = usePlaylistStore();
  const { userRemovePlaylist } = useUserStore();
  const playbackState = usePlaybackState();
  const [loading, setLoading] = useState<boolean>(false);
  const [playlistOpen, setPlaylistOpen] = useState<IPlaylist>(playlist);

  const handleDeletePlaylist = async () => {
    setLoading(true);
    try {
      await deletePlaylist(playlistOpen.id);
      navigation.goBack();
      setLoading(false);
      userRemovePlaylist(playlistOpen.id);
    } catch (err) {
      setLoading(false);
    } finally {
    }
  };

  const handleAttMusicsLocal = (musics: IMusic[]) => {
    const playlistWithNewMusics: IPlaylist = {
      ...playlistOpen,
      musics: [...playlistOpen.musics, ...musics],
    };

    setPlaylistOpen(playlistWithNewMusics);
  };

  const handlePlayPlaylist = async (music?: IMusic) => {
    if (playbackState !== State.None && playlistId !== playlistOpen.id) {
      await TrackPlayer.reset();
    }

    if (playlistId !== 'AllMusics') {
      changePlayList(playlistOpen.musics);
      changePlaylistId(playlistOpen.id);
    }
    navigation.navigate('Music', { music: music ?? playlistOpen.musics[0] });
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
    playlistOpen,
    showModalAddMusic,
    loading,
    handleGoBack,
    handleAttMusicsLocal,
    handleDeletePlaylist,
    handlePlayPlaylist,
    handleCloseModalAddMusic,
    handleOpenModalAddMusic,
  };

  return createElement(View, viewProps);
};

export default Playlist;
