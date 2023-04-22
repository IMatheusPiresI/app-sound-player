import { IUser } from '@store/user/types';
import firestore, { db } from '@services/firebase/collections';
import { IMusic } from '@components/CarouselMusic/types';

import { ICreateUserDB } from './types';

const COLLECTION_NAME = 'users';
const usersCollectionRef = db.collection(COLLECTION_NAME);

const createUserInCollection = async (user: ICreateUserDB) => {
  try {
    await usersCollectionRef.doc(user.id).set(user);
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (userId: string) => {
  try {
    const userDoc = await usersCollectionRef.doc(userId).get();

    if (!userDoc.exists) {
      return null;
    }
    const user = userDoc.data();

    return user as IUser;
  } catch (err) {
    console.log(err);
  }
};

const setMusicToFavorite = async (userId: string, music: IMusic) => {
  await usersCollectionRef.doc(userId).update({
    favorites: firestore.FieldValue.arrayUnion(music),
  });
};

const removeMusicToFavorite = async (userId: string, music: IMusic) => {
  await usersCollectionRef.doc(userId).update({
    favorites: firestore.FieldValue.arrayRemove(music),
  });
};

export {
  createUserInCollection,
  getUserById,
  setMusicToFavorite,
  removeMusicToFavorite,
};
