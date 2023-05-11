import { IPlaylist } from '@services/firebase/collections/users/types';

type IProps = { playlist: IPlaylist };

type IViewProps = { playlist: IPlaylist; handleGoToPlaylist: () => void };

export { IProps, IViewProps };
