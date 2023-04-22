import React, { createElement, useState } from 'react';

import { useFormik } from 'formik';
import { StackActions, useNavigation } from '@react-navigation/native';
import { getAllMusics } from '@services/firebase/collections/musics';
import { useMusicStore } from '@store/musics';
import { loginWithEmailAndPassword } from '@services/firebase/auth';
import { useUserStore } from '@store/user';

import { signInSchema } from './schemas';
import { ISignInForm, IViewProps } from './types';
import View from './view';

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAllMusics, setErrorGetMusics } = useMusicStore((state) => state);
  const { setUser } = useUserStore((state) => state);
  const navigation = useNavigation();
  const formik = useFormik<ISignInForm>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    validateOnMount: true,
    onSubmit: () => {},
  });

  const handleGoToCreateAccount = () => {
    navigation.navigate('SignUp');
  };

  const startApp = async () => {
    try {
      const allMusics = await getAllMusics();
      setAllMusics(allMusics);
      setErrorGetMusics(false);
    } catch (err) {
      setErrorGetMusics(true);
    } finally {
      setLoading(false);
      navigation.dispatch(StackActions.replace('AppRoutes'));
    }
  };

  const handleLogin = async () => {
    setLoading(true);

    try {
      const user = await loginWithEmailAndPassword({
        email: formik.values.email,
        password: formik.values.password,
      });

      if (!user?.email) {
        console.log('user Not Found');
        return;
      }
      setUser(user);
      await startApp();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const viewProps: IViewProps = {
    formik,
    loading,
    handleLogin,
    handleGoToCreateAccount,
  };
  return createElement(View, viewProps);
};

export default SignIn;
