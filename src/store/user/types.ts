import { IMusic } from '@components/CarouselMusic/types';

type IUser = {
  name: string;
  email: string;
  id: string;
  photoURL: string;
  favorites: IMusic[];
};
type IUserState = {
  user: IUser;
  setUser: (user: IUser) => void;
  addMusicToFavorites: (music: IMusic) => void;
  removeMusicToFavorites: (music: IMusic) => void;
};

export { IUserState, IUser };
