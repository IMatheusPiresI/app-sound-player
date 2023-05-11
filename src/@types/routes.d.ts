import { IMusic } from '@components/CarouselMusic/types';
import { IPlaylist } from '@services/firebase/collections/users/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      TabRoutes: undefined;
      AppRoutes: undefined;
      Music: { music: IMusic };
      Playlist: { playlist: IPlaylist };
      Home: undefined;
      Favorites: undefined;
      Album: undefined;
      Profile: undefined;
      SignIn: undefined;
      SignUp: undefined;
    }
  }
}
