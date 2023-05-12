import { IMusic } from '@components/CarouselMusic/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      TabRoutes: undefined;
      AppRoutes: undefined;
      Music: { music: IMusic };
      Playlist: { playlistID: string };
      Home: undefined;
      Favorites: undefined;
      Album: undefined;
      Profile: undefined;
      SignIn: undefined;
      SignUp: undefined;
    }
  }
}
