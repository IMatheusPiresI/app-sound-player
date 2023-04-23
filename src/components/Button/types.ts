import { TouchableOpacityProps } from 'react-native';

type IProps = {
  title: string;
  isLoading?: boolean;
  variant?: 'black80';
  disabled?: boolean;
} & TouchableOpacityProps;

type IViewProps = {
  title: string;
  isLoading?: boolean;
  variant?: 'black80';
  disabled?: boolean;
} & TouchableOpacityProps;

export { IProps, IViewProps };
