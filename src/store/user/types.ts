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
};

export { IUserState, IUser };
