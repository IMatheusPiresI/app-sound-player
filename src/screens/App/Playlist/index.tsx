import React, { createElement } from 'react';

import { useNavigation } from '@react-navigation/native';

import { IViewProps } from './types';
import View from './view';

const PlaylistCreate: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const viewProps: IViewProps = {
    handleGoBack,
  };

  return createElement(View, viewProps);
};

export default PlaylistCreate;
