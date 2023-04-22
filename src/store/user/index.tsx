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
}));
