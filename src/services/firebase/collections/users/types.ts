import { IMusic } from '@components/CarouselMusic/types';

type ICreateUserDB = {
  id: string;
  email: string;
  name: string;
  photoURL: string;
  favorites: IMusic[];
};

type IPlaylist = {
  id: string;
  creator: {
    id: string;
    name: string;
  };
  name: string;
  imageBanner: string;
  musics: IMusic[];
};

export { ICreateUserDB, IPlaylist };
