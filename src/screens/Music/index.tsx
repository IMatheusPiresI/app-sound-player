import React, { createElement, useMemo, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { IMusic } from '@components/CarouselMusic/types';
import mockMusics from '@resources/mocks/mockMusics';

import View from './view';
import { IViewProps } from './types';

const Music: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { music } = route.params as { music: IMusic };
  const [musicId, setMusicId] = useState<number>(Number(music.id));

  const currentSong = useMemo(() => {
    const idSong = musicId - 1;
    const song = mockMusics[idSong];

    return song;
  }, [musicId]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const viewProps: IViewProps = {
    handleGoBack,
    setMusicId,
    currentSong,
  };
  return createElement(View, viewProps);
};

export default Music;
