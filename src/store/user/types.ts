import { IMusic } from '@components/CarouselMusic/types';
import { IPlaylist } from '@services/firebase/collections/users/types';

type IUser = {
  name: string;
  email: string;
  id: string;
  photoURL: string;
  favorites: IMusic[];
  playlists: IPlaylist[];
};
type IUserState = {
  user: IUser;
  setUser: (user: IUser) => void;
  addMusicToFavorites: (music: IMusic) => void;
  removeMusicToFavorites: (music: IMusic) => void;
  userAddPlaylist: (playlist: IPlaylist) => void;
  userAddMusicPlaylist: (playlistID: string, musics: IMusic[]) => void;
};

export { IUserState, IUser };
