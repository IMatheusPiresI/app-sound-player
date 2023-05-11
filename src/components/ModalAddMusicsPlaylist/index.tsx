import React, { createElement, useCallback, useMemo, useState } from 'react';

import { IMusic } from '@components/CarouselMusic/types';
import { useMusicStore } from '@store/musics';
import { addMusicsToPlaylist } from '@services/firebase/collections/playlist';
import { useUserStore } from '@store/user';

import { IProps, IViewProps } from './types';
import View from './view';

export const ModalAddMusicsPlaylist: React.FC<IProps> = ({
  isVisible,
  playlist,
  handleClose,
}) => {
  const { user } = useUserStore();
  const { allMusics } = useMusicStore();
  const [selectedMusics, setSelectedMusics] = useState<IMusic[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const musicsWithoutPlaylist = useMemo(
    () =>
      allMusics.filter(
        (music) =>
          !playlist.musics.some(
            (playlistMusic) => playlistMusic.id === music.id,
          ),
      ),
    [allMusics, playlist.musics],
  );

  const handleAddMusicsPlaylist = async () => {
    setLoading(true);
    try {
      await addMusicsToPlaylist({
        playlist,
        musics: selectedMusics,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    handleClose();
  };

  const handleToogleSelectMusic = useCallback(
    (music: IMusic) => {
      const musicAlreadyExists = selectedMusics.some(
        (song) => song.id === music.id,
      );

      if (musicAlreadyExists) {
        const selectedMusicsWithoutMusic = selectedMusics.filter(
          (selectedMusic) => selectedMusic.id !== music.id,
        );
        setSelectedMusics(selectedMusicsWithoutMusic);
        return;
      }

      setSelectedMusics((prevState) => [...prevState, music]);
    },
    [selectedMusics],
  );

  const viewProps: IViewProps = {
    isVisible,
    selectedMusics,
    musicsWithoutPlaylist,
    loading,
    handleAddMusicsPlaylist,
    handleToogleSelectMusic,
    handleCloseModal,
  };

  return createElement(View, viewProps);
};
