import React, {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { IMusic } from '@components/CarouselMusic/types';
import { useMusicStore } from '@store/musics';
import {
  removeMusicToFavorite,
  setMusicToFavorite,
} from '@services/firebase/collections/users';
import { useUserStore } from '@store/user';

import View from './view';
import { IViewProps } from './types';

const Music: React.FC = () => {
  const { user, addMusicToFavorites, removeMusicToFavorites } = useUserStore(
    (state) => state,
  );
  const navigation = useNavigation();
  const route = useRoute();
  const { music } = route.params as { music: IMusic };
  const { allMusics } = useMusicStore((state) => state);
  const [musicId, setMusicId] = useState<number>(0);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const currentSong = useMemo(() => {
    const currentMusic = allMusics[musicId];

    return currentMusic!;
  }, [allMusics, musicId]);

  const selectedMusicId = useMemo(() => {
    const musicIndex = allMusics.findIndex(
      (findMusic) => findMusic.id === music.id,
    );
    return musicIndex;
  }, [allMusics, music.id]);

  const isFavorited = useMemo(() => {
    const musicFavorited = user.favorites.find(
      (musicFavorite) => musicFavorite.id === currentSong.id,
    );

    return !!musicFavorited;
  }, [currentSong.id, user.favorites]);

  const handleAddMusicToFavorite = async () => {
    try {
      addMusicToFavorites(currentSong);
      await setMusicToFavorite(user.id, currentSong);
    } catch (err) {
      removeMusicToFavorites(currentSong);
      //ToastError
    }
  };

  const handleRemoveMusicToFavorite = async () => {
    try {
      removeMusicToFavorites(currentSong);
      await removeMusicToFavorite(user.id, currentSong);
    } catch (err) {
      addMusicToFavorites(currentSong);
      //ToastError
    }
  };

  const handleToogleFavorite = async () => {
    if (!isFavorited) {
      await handleAddMusicToFavorite();
      return;
    }
    await handleRemoveMusicToFavorite();
  };

  const getInitialIndex = useCallback(() => {
    const musicIndex = allMusics.findIndex(
      (findMusic) => findMusic.id === music.id,
    );

    setMusicId(musicIndex);
  }, [allMusics, music.id]);

  useEffect(() => {
    getInitialIndex();
  }, [getInitialIndex]);

  const viewProps: IViewProps = {
    handleGoBack,
    setMusicId,
    handleToogleFavorite,
    isFavorited,
    currentSong,
    selectedMusicId,
  };
  return createElement(View, viewProps);
};

export default Music;
