import React, { createElement, useCallback, useMemo, useState } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import uuid from 'react-native-uuid';

import { IMusic } from '@components/CarouselMusic/types';
import { useUserStore } from '@store/user';
import { IPlaylist } from '@services/firebase/collections/users/types';
import { useNavigation } from '@react-navigation/native';
import { createPlaylist } from '@services/firebase/collections/playlist';

import { IProps, IViewProps } from './types';
import View from './view';

export const ModalCreatePlaylist: React.FC<IProps> = ({
  isVisible,
  handleClose,
}) => {
  const navigation = useNavigation();
  const stepAnimate = useSharedValue(0);
  const { user, userAddPlaylist } = useUserStore();
  const [imagePlaylist, setImagePlaylist] = useState<string | null>(null);
  const [playlistName, setPlaylistName] = useState<string>('');
  const [selectedMusics, setSelectedMusics] = useState<IMusic[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCloseModal = () => {
    handleClose();
  };

  const handleCreatePlaylist = async () => {
    setLoading(true);

    const playlist: IPlaylist = {
      id: String(uuid.v4()),
      creator: {
        id: user.id,
        name: user.name,
      },
      name: playlistName,
      imageBanner: imagePlaylist ?? '',
      musics: selectedMusics,
    };

    try {
      await createPlaylist(playlist);
      navigation.navigate('Playlist', { playlist });
      userAddPlaylist(playlist);
      handleCloseModal();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
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

  const validStep = useMemo(() => {
    if (currentStep === 0) {
      return !!playlistName;
    }
    return true;
  }, [currentStep, playlistName]);

  const handleNextStep = () => {
    if (currentStep === 0) {
      stepAnimate.value = withTiming(1, { duration: 400 });
      setCurrentStep((prevState) => prevState + 1);
      return;
    }
    stepAnimate.value = withTiming(0, { duration: 400 });
  };

  const rAnimateFormCreatePlaylist = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          stepAnimate.value,
          [0, 1],
          [0, -100],
          Extrapolate.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      stepAnimate.value,
      [0, 0.8],
      [1, 0],
      Extrapolate.CLAMP,
    ),
    left: interpolate(stepAnimate.value, [0, 1], [0, -100], Extrapolate.CLAMP),
  }));

  const rAnimateSelectMusics = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          stepAnimate.value,
          [0, 1],
          [100, 0],
          Extrapolate.CLAMP,
        ),
      },
    ],
    opacity: interpolate(
      stepAnimate.value,
      [0, 0.8],
      [0, 1],
      Extrapolate.CLAMP,
    ),
    zIndex: interpolate(stepAnimate.value, [0, 1], [0, 999], Extrapolate.CLAMP),
  }));

  const viewProps: IViewProps = {
    isVisible,
    imagePlaylist,
    playlistName,
    validStep,
    rAnimateFormCreatePlaylist,
    rAnimateSelectMusics,
    selectedMusics,
    loading,
    handleToogleSelectMusic,
    handleCreatePlaylist,
    handleNextStep,
    setPlaylistName,
    handleCloseModal,
    setImagePlaylist,
  };

  return createElement(View, viewProps);
};
