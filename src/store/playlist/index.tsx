import { create } from 'zustand';

import { IPlayListState } from './types';

export const usePlaylistStore = create<IPlayListState>((set) => ({
  currentPlaylist: [],
  playlistId: 'Initial',
  changePlayList: (playlist) =>
    set(() => ({
      currentPlaylist: playlist,
    })),

  changePlaylistId: (playlistId) =>
    set(() => ({
      playlistId,
    })),
}));
