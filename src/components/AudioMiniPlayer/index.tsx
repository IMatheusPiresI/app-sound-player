import React, { createElement, useCallback, useEffect, useState } from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';

import mockMusics from '@resources/mocks/mockMusics';
import { IMusic } from '@components/CarouselMusic/types';
import { useNavigation } from '@react-navigation/native';

import { IProps, IViewProps } from './types';
import View from './view';

export const AudioMiniPlayer: React.FC<IProps> = () => {
  const trackState = usePlaybackState();
  const [currentSong, setCurrentSong] = useState<IMusic | undefined>(undefined);
  const navigation = useNavigation();

  const handleNaviteToMusic = () => {
    if (!currentSong) return;
    navigation.navigate('Music', { music: currentSong });
  };

  const handleTogglePlaySong = async () => {
    if (trackState === State.Playing) {
      await TrackPlayer.pause();
      return;
    }
    await TrackPlayer.play();
  };

  const handleCloseMiniPlayerAndStopMusic = async () => {
    await TrackPlayer.reset();
    setCurrentSong(undefined);
  };

  const getCurrentSong = useCallback(async () => {
    if (trackState === State.None) return;

    const track = await TrackPlayer.getCurrentTrack();
    if (track === null) return;

    const currentTrackIndex = track + 1;
    const currentMusic = mockMusics.find(
      (music) => music.id === String(currentTrackIndex),
    );
    return setCurrentSong(currentMusic);
  }, [trackState]);

  useEffect(() => {
    getCurrentSong();
  }, [getCurrentSong]);

  const viewProps: IViewProps = {
    trackState,
    currentSong,
    handleNaviteToMusic,
    handleTogglePlaySong,
    handleCloseMiniPlayerAndStopMusic,
  };

  return createElement(View, viewProps);
};
