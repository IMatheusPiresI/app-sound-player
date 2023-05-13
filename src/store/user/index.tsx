import { create } from 'zustand';

import { IUserState } from './types';

export const useUserStore = create<IUserState>((set) => ({
  user: {
    email: '',
    id: '',
    name: '',
    photoURL: '',
    favorites: [],
    playlists: [],
  },
  setUser: (user) =>
    set(() => ({
      user,
    })),
  addMusicToFavorites: (music) =>
    set((state) => ({
      user: {
        ...state.user,
        favorites: [...state.user.favorites, music],
      },
    })),
  removeMusicToFavorites: (music) =>
    set((state) => ({
      user: {
        ...state.user,
        favorites: state.user.favorites.filter(
          (musicCheck) => musicCheck.id !== music.id,
        ),
      },
    })),
  userAddPlaylist: (playlist) =>
    set((state) => ({
      user: {
        ...state.user,
        playlists: [...state.user.playlists, playlist],
      },
    })),
  userAddMusicPlaylist: (playlistID, musics) =>
    set((state) => {
      const playlists = state.user.playlists.map((pl) => {
        if (pl.id === playlistID) {
          const playlistMusics = [...pl.musics, ...musics];

          return {
            ...pl,
            musics: playlistMusics,
          };
        }
        return pl;
      });

      return {
        user: {
          ...state.user,
          playlists,
        },
      };
    }),
  userRemovePlaylist: (playlistID) =>
    set((state) => ({
      user: {
        ...state.user,
        playlists: state.user.playlists.filter((pl) => pl.id !== playlistID),
      },
    })),
}));
