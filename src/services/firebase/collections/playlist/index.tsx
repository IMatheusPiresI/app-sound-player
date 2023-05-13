import { db } from '@services/firebase/collections';
import { IMusic } from '@components/CarouselMusic/types';

import { IAddRemoveMusicsToPlaylist, IRemoveMusicPlaylist } from './types';
import { IPlaylist } from '../users/types';

const COLLECTION_NAME = 'playlist';
const playlistCollectionRef = db.collection(COLLECTION_NAME);

const getAllPlaylists = async () => {
  const allPlaylists = await playlistCollectionRef
    .get()
    .then((allMusicsResult) => {
      const playlists: IPlaylist[] = [];
      allMusicsResult.forEach((doc) => {
        playlists.push(doc.data() as IPlaylist);
      });

      return playlists;
    })
    .catch((error) => {
      console.error('Erro ao obter músicas: ', error);
      return [];
    });

  return allPlaylists;
};

const addMusicsToPlaylist = async ({
  musics,
  playlist,
}: IAddRemoveMusicsToPlaylist) => {
  await playlistCollectionRef
    .where('id', '==', playlist.id)
    .get()
    .then(async (res) => {
      const playlistDoc = res.docs[0];
      const playlistData = playlistDoc.data();
      const playlistMusics = playlistData.musics || [];
      const updatedMusics = [...playlistMusics, ...musics];

      await playlistDoc.ref.update({
        musics: updatedMusics,
      });
    })
    .catch((err) => console.log(err));
};

const removeMusicToPlaylist = async ({
  musicId,
  playlistId,
}: IRemoveMusicPlaylist) => {
  await playlistCollectionRef
    .where('id', '==', playlistId)
    .get()
    .then(async (res) => {
      const playlistDoc = res.docs[0];
      const playlistData = playlistDoc.data();
      const playlistMusics = playlistData.musics.filter(
        (music: IMusic) => music.id !== musicId,
      );

      await playlistDoc.ref.update({
        musics: playlistMusics,
      });
    })
    .catch((err) => console.log(err));
};

const createPlaylist = async (playlist: IPlaylist) => {
  await playlistCollectionRef.doc().set(playlist);
};

const deletePlaylist = async (playlistId: string) => {
  const querySnapshot = await playlistCollectionRef
    .where('id', '==', playlistId)
    .get();

  if (!querySnapshot.empty) {
    await playlistCollectionRef.doc(querySnapshot.docs[0].id).delete();
  }
};

export {
  addMusicsToPlaylist,
  getAllPlaylists,
  createPlaylist,
  deletePlaylist,
  removeMusicToPlaylist,
};
