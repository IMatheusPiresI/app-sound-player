import { IMusic } from '@components/CarouselMusic/types';

import { IPlaylist } from '../users/types';

type IAddRemoveMusicsToPlaylist = {
  playlist: IPlaylist;
  musics: IMusic[];
};

export { IAddRemoveMusicsToPlaylist };
