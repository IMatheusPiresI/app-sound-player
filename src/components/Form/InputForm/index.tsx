import React, { createElement, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { IProps, IViewProps } from './types';
import View from './view';

export const InputForm: React.FC<IProps> = ({ label, secret, ...rest }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const labelAnimate = useSharedValue(0);
  const inputRef = useRef<TextInput>(null);

  const handleToogleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const onFocus = () => {
    labelAnimate.value = withTiming(1, { duration: 400 });
  };

  const onBlur = () => {
    const { value } = rest;
    if (!value) {
      labelAnimate.value = withTiming(0, { duration: 400 });
    }
  };

  const rAnimatedLabelContainer = useAnimatedStyle(() => ({
    bottom: interpolate(labelAnimate.value, [0, 1], [18, 38]),
    left: interpolate(labelAnimate.value, [0, 1], [24, 18]),
    position: 'absolute',
  }));

  const rAnimatedLabel = useAnimatedStyle(() => ({
    fontSize: interpolate(labelAnimate.value, [0, 1], [18, 12]),
  }));

  const viewProps: IViewProps = {
    label,
    rAnimatedLabelContainer,
    rAnimatedLabel,
    inputRef,
    secret,
    showPassword,
    ...rest,
    handleFocus,
    handleToogleShowPassword,
    onFocus,
    onBlur,
  };

  return createElement(View, viewProps);
};
