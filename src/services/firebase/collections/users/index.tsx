import { IUser } from '@store/user/types';
import { db } from '@services/firebase/collections';

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
export { createUserInCollection, getUserById };
