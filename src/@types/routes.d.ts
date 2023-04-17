import { IMusic } from '@components/CarouselMusic/types';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      TabRoutes: undefined;
      Music: { music: IMusic };
      Home: undefined;
      Favorites: undefined;
      Album: undefined;
      Profile: undefined;
    }
  }
}
