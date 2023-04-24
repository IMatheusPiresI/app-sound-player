import { create } from 'zustand';

import { IPlayListState } from './types';

export const usePlaylistStore = create<IPlayListState>((set) => ({
  currentPlaylist: [],
  playlistType: 'Initial',
  changePlayList: (playlist) =>
    set(() => ({
      currentPlaylist: playlist,
    })),
}));
