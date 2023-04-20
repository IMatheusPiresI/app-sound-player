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

import View from './view';
import { IViewProps } from './types';

const Music: React.FC = () => {
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
    currentSong,
    selectedMusicId,
  };
  return createElement(View, viewProps);
};

export default Music;
