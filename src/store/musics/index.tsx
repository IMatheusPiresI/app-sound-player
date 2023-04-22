import { create } from 'zustand';

import { IAudioPlayerState } from './types';

export const useMusicStore = create<IAudioPlayerState>((set) => ({
  allMusics: [],
  error: false,
  setAllMusics: (allMusics) =>
    set(() => ({
      allMusics,
    })),
  setErrorGetMusics: (error) =>
    set(() => ({
      error,
    })),
}));
