import { create } from 'zustand';

import { IUserState } from './types';

export const useUserStore = create<IUserState>((set) => ({
  user: {
    email: '',
    id: '',
    name: '',
    photoURL: '',
    favorites: [],
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
}));
