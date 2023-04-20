import React, { createElement, useCallback, useEffect } from 'react';
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import { useMusicStore } from '@store/musics';

import { IProps, ITrack, IViewProps } from './types';
import View from './view';

export const MusicPlayer: React.FC<IProps> = ({
  idMusicSelected,
  setMusicId,
}) => {
  const { allMusics } = useMusicStore((state) => state);
  const playerState = usePlaybackState();
  const isNotRunning = playerState === State.None;
  const selectedSong = idMusicSelected;

  const setupCurentSongAndOptions = useCallback(async () => {
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });
    await TrackPlayer.add(allMusics);
    await TrackPlayer.skip(selectedSong);
    await TrackPlayer.play();
  }, [allMusics, selectedSong]);

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
      setMusicId(0);
    }
  };

  const handleGoPrevSong = async () => {
    try {
      await TrackPlayer.skipToPrevious();
      setMusicId((prevState) => prevState - 1);
    } catch {
      const musicTotalLenght = allMusics.length;
      await TrackPlayer.skip(musicTotalLenght - 1);
      setMusicId(musicTotalLenght - 1);
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
      if (event.position !== 0) {
        const track = (await TrackPlayer.getTrack(event.nextTrack)) as ITrack;
        const indexTrack = allMusics.findIndex(
          (music) => music.id === track.id,
        );
        setMusicId(indexTrack);
      }
    }
  });

  const viewProps: IViewProps = {
    handleGoNextSong,
    handleGoPrevSong,
    handleTogglePlay,
  };

  return createElement(View, viewProps);
};
