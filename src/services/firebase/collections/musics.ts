import { IMusic } from '@components/CarouselMusic/types';

import { db } from '..';

const COLLECTION_NAME = 'musics';

const musicCollectionRef = db.collection(COLLECTION_NAME);

export const getAllMusics = async () => {
  const allMusics = musicCollectionRef
    .get()
    .then((allMusicsResult) => {
      const musics: IMusic[] = [];
      allMusicsResult.forEach((doc) => {
        musics.push(doc.data() as IMusic);
      });

      return musics;
    })
    .catch((error) => {
      console.error('Erro ao obter músicas: ', error);
      return [];
    });

  return allMusics;
};
