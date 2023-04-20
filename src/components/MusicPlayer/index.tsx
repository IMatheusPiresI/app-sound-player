import React, { createElement, useCallback, useEffect } from 'react';
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import mockMusics from '@resources/mocks/mockMusics';

import { IProps, ITrack, IViewProps } from './types';
import View from './view';

export const MusicPlayer: React.FC<IProps> = ({
  idMusicSelected,
  setMusicId,
}) => {
  const playerState = usePlaybackState();
  const isPlaying = playerState === State.Playing;
  const isNotRunning = playerState === State.None;
  const selectedSong = idMusicSelected - 1;

  const setupCurentSongAndOptions = useCallback(async () => {
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
    await TrackPlayer.add(mockMusics);
    await TrackPlayer.skip(selectedSong);
    await TrackPlayer.play();
  }, [selectedSong]);

  const setupTrackPlayer = useCallback(async () => {
    try {
      if (!isNotRunning) return;
      await TrackPlayer.setupPlayer();
      await setupCurentSongAndOptions();
    } catch (err) {
      const trackIndex = await TrackPlayer.getCurrentTrack();
      if (trackIndex === null) {
        await setupCurentSongAndOptions();
        return;
      }
      if (selectedSong !== trackIndex) {
        await TrackPlayer.skip(selectedSong);
      }
      await TrackPlayer.play();
    }
  }, [isNotRunning, selectedSong, setupCurentSongAndOptions]);

  const handleGoNextSong = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (err) {
      await TrackPlayer.skip(0);
      setMusicId(1);
    }
  };

  const handleGoPrevSong = async () => {
    try {
      await TrackPlayer.skipToPrevious();
      setMusicId((prevState) => prevState - 1);
    } catch {
      const musicTotalLenght = mockMusics.length;
      await TrackPlayer.skip(musicTotalLenght - 1);
      setMusicId(musicTotalLenght);
    }
  };

  const handleTogglePlay = async () => {
    const trackState = await TrackPlayer.getState();
    if (trackState === State.Playing) {
      await TrackPlayer.pause();
      return;
    }
    await TrackPlayer.play();
  };

  useEffect(() => {
    setupTrackPlayer();
  }, [setupTrackPlayer]);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async (event) => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = (await TrackPlayer.getTrack(event.nextTrack)) as ITrack;
      if (event.position !== 0) {
        setMusicId(track.id);
      }
    }
  });

  const viewProps: IViewProps = {
    handleGoNextSong,
    handleGoPrevSong,
    handleTogglePlay,
    isPlaying,
  };

  return createElement(View, viewProps);
};
