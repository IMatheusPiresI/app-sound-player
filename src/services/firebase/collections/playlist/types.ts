import { IMusic } from '@components/CarouselMusic/types';

import { IPlaylist } from '../users/types';

type IAddRemoveMusicsToPlaylist = {
  playlist: IPlaylist;
  musics: IMusic[];
};

type IRemoveMusicPlaylist = {
  musicId: string;
  playlistId: string;
};

export { IAddRemoveMusicsToPlaylist, IRemoveMusicPlaylist };
