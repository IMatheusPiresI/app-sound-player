import { create } from 'zustand';

import { IAudioPlayerState } from './types';

export const useMusicStore = create<IAudioPlayerState>((set) => ({
  allMusics: [],
  setAllMusics: (allMusics) =>
    set(() => ({
      allMusics,
    })),
}));
