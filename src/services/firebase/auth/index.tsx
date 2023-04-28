import { useUserStore } from '@store/user';
import auth from '@react-native-firebase/auth';
import { useMusicStore } from '@store/musics';
import { getAllMusics } from '@services/firebase/collections/musics';

import { createUserInCollection, getUserById } from '../collections/users';
import { IObservableCheck, IPayloadEmailPassword } from './types';

const registerWithEmailAndPassword = async ({
  email,
  password,
}: IPayloadEmailPassword) => {
  const userCreatedInfo = await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async (userInfo) => {
      const userCreated = userInfo.user;
      const token = await userCreated.getIdToken();
      const user = {
        id: userCreated.uid,
        email: userCreated.email ?? '',
        photoURL: userCreated.photoURL ?? '',
        name: userCreated.displayName ?? '',
        favorites: [],
      };
      await createUserInCollection(user);

      return { user, token };
    });

  return userCreatedInfo;
};

const loginWithEmailAndPassword = async ({
  email,
  password,
}: IPayloadEmailPassword) => {
  const user = await auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (userCredential) => {
      const userLogged = await getUserById(userCredential.user.uid);

      return userLogged;
    });

  return user;
};

const observableUserAuth = ({
  initializing,
  setInitializing,
}: IObservableCheck) => {
  auth().onAuthStateChanged(async (sessionUser) => {
    console.log(sessionUser);
    if (sessionUser && initializing) {
      const userRecovered = await getUserById(sessionUser.uid);

      if (!userRecovered) return;
      useUserStore.setState({
        user: userRecovered,
      });

      const allMusics = await getAllMusics();
      useMusicStore.setState({
        allMusics,
      });

      setInitializing(false);
    } else {
      if (initializing) {
        setInitializing(false);
      }
    }
  });
};

export {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  observableUserAuth,
};
