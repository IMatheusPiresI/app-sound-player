import React, { createElement, useRef } from 'react';
import { TextInput } from 'react-native';

import { IProps, IViewProps } from './types';
import View from './view';

export const InputSearch: React.FC<IProps> = ({ ...rest }) => {
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const viewProps: IViewProps = {
    inputRef,
    ...rest,
    handleFocus,
  };

  return createElement(View, viewProps);
};
