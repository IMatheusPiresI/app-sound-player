import React, { createElement, useCallback, useEffect } from 'react';
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import { usePlaylistStore } from '@store/playlist';

import { IProps, ITrack, IViewProps } from './types';
import View from './view';

export const MusicPlayer: React.FC<IProps> = ({
  idMusicSelected,
  playList,
  setMusicId,
}) => {
  const { currentPlaylist } = usePlaylistStore((state) => state);
  const playerState = usePlaybackState();
  const isNotRunning = playerState === State.None;

  const setupCurentSongAndOptions = useCallback(async () => {
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
      ],
    });

    await TrackPlayer.add(playList);
    await TrackPlayer.skip(idMusicSelected);
    await TrackPlayer.play();
  }, [playList, idMusicSelected]);

  const setupTrackPlayer = useCallback(async () => {
    try {
      if (!isNotRunning) return;
      await TrackPlayer.setupPlayer();
      await setupCurentSongAndOptions();
    } catch (err) {
      const trackIndex = await TrackPlayer.getCurrentTrack();
      const currentTrack = await TrackPlayer.getTrack(trackIndex!);
      if (currentTrack === null) {
        await setupCurentSongAndOptions();
        return;
      }
      if (idMusicSelected !== trackIndex) {
        await TrackPlayer.skip(idMusicSelected);
      }
      await TrackPlayer.play();
    }
  }, [isNotRunning, idMusicSelected, setupCurentSongAndOptions]);

  const handleGoNextSong = async () => {
    try {
      await TrackPlayer.skipToNext();
    } catch (err) {
      console.log('asdsadadad');
      await TrackPlayer.skip(0);
      setMusicId(0);
    }
  };

  const handleGoPrevSong = async () => {
    try {
      const currentIndexTrack = await TrackPlayer.getCurrentTrack();

      if (currentIndexTrack && currentIndexTrack !== 0) {
        await TrackPlayer.skip(currentIndexTrack - 1);
        setMusicId((prevState) => prevState - 1);
        return;
      }
      const musicTotalLenght = currentPlaylist.length;
      await TrackPlayer.skip(musicTotalLenght - 1);
      setMusicId(musicTotalLenght - 1);
    } catch (err) {
      console.log('Error on return to prev song');
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
        if (!track) return;
        const indexTrack = currentPlaylist.findIndex(
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
