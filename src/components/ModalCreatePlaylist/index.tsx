import React, { createElement, useMemo, useState } from 'react';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { IProps, IViewProps } from './types';
import View from './view';

export const ModalCreatePlaylist: React.FC<IProps> = ({
  isVisible,
  handleClose,
}) => {
  const stepAnimate = useSharedValue(0);
  const [imagePlaylist, setImagePlaylist] = useState<string | null>(null);
  const [playlistName, setPlaylistName] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<number>(0);

  const validStep = useMemo(() => {
    if (currentStep === 0) {
      return !!playlistName;
    }
    return true;
  }, [currentStep, playlistName]);

  const handleNextStep = () => {
    if (currentStep === 0) {
      stepAnimate.value = withTiming(1, { duration: 400 });
      setCurrentStep((prevState) => prevState + 1);
      return;
    }
    stepAnimate.value = withTiming(0, { duration: 400 });
  };

  const rAnimateFormCreatePlaylist = useAnimatedStyle(() => ({
    left: interpolate(stepAnimate.value, [0, 1], [0, -200], Extrapolate.CLAMP),
    opacity: interpolate(
      stepAnimate.value,
      [0, 0.8],
      [1, 0],
      Extrapolate.CLAMP,
    ),
  }));

  const rAnimateSelectMusics = useAnimatedStyle(() => ({
    left: interpolate(stepAnimate.value, [0, 1], [200, 0], Extrapolate.CLAMP),
    opacity: interpolate(
      stepAnimate.value,
      [0, 0.8],
      [0, 1],
      Extrapolate.CLAMP,
    ),
  }));

  const viewProps: IViewProps = {
    isVisible,
    imagePlaylist,
    playlistName,
    validStep,
    rAnimateFormCreatePlaylist,
    rAnimateSelectMusics,
    handleNextStep,
    setPlaylistName,
    handleClose,
    setImagePlaylist,
  };

  return createElement(View, viewProps);
};
