import mockMusics from '@resources/mocks/mockMusics';
import { create } from 'zustand';

import { IAudioPlayerState } from './types';

export const useBearStore = create<IAudioPlayerState>((set) => ({
  currentMusic: null,
  showAudioPlayer: false,
  changeCurrentMusic: (musicId: string) =>
    set((state) => {
      const music = mockMusics.find((song) => song.id === musicId);
      return {
        ...state,
        currentMusic: music,
      };
    }),
  openAudioPlayer: () =>
    set(() => ({
      showAudioPlayer: true,
    })),
  closeAudioPlayer: () =>
    set(() => ({
      showAudioPlayer: false,
    })),
}));
