import { IMusic } from '@components/CarouselMusic/types';

type ICreateUserDB = {
  id: string;
  email: string;
  name: string;
  photoURL: string;
  favorites: IMusic[];
};

export { ICreateUserDB };
