import { TouchableOpacityProps } from 'react-native';

import { IMusic } from '@components/CarouselMusic/types';

type IProps = {
  music: IMusic;
  isActive: boolean;
} & TouchableOpacityProps;

type IViewProps = {
  rAnimatedCheckBox: {
    opacity: number;
  };
  rAnimatedBorder: {
    borderWidth: number;
    borderColor: '#fff6' | '#a5f8a8';
    borderRadius: number;
  };
  music: IMusic;
} & TouchableOpacityProps;

export type { IProps, IViewProps };
