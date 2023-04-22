import React, { createElement, useState } from 'react';

import { useFormik } from 'formik';
import { StackActions, useNavigation } from '@react-navigation/native';
import { registerWithEmailAndPassword } from '@services/firebase/auth';
import { useAuthStore } from '@store/auth';
import { useUserStore } from '@store/user';
import { getAllMusics } from '@services/firebase/collections/musics';
import { useMusicStore } from '@store/musics';

import { signUpSchema } from './schemas';
import { ISignUpForm, IViewProps } from './types';
import View from './view';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const { setCredentials } = useAuthStore((state) => state);
  const { setUser } = useUserStore((state) => state);
  const { setAllMusics, setErrorGetMusics } = useMusicStore((state) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const formik = useFormik<ISignUpForm>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpSchema,
    validateOnMount: true,
    onSubmit: (values) => handleSignUp(values),
  });

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

  const handleSignUp = async (values: ISignUpForm) => {
    setLoading(true);
    try {
      const { token, user } = await registerWithEmailAndPassword({
        email: values.email,
        password: values.password,
      });
      setCredentials(token);
      setUser(user);
      await startApp();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handleGoToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const viewProps: IViewProps = {
    formik,
    loading,
    handleGoToSignIn,
  };
  return createElement(View, viewProps);
};

export default SignUp;
