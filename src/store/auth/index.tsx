import { create } from 'zustand';

import { IAuthState } from './types';

export const useAuthStore = create<IAuthState>((set) => ({
  credentials: {
    token: '',
  },
  setCredentials: (token: string) =>
    set(() => ({
      credentials: {
        token,
      },
    })),
}));
