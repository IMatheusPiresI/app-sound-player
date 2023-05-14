import { TouchableOpacityProps } from 'react-native';

type IProps = {
  title: string;
  isLoading?: boolean;
  variant?: 'black80' | 'delete';
  disabled?: boolean;
  small?: boolean;
} & TouchableOpacityProps;

type IViewProps = {
  title: string;
  isLoading?: boolean;
  variant?: 'black80' | 'delete';
  disabled?: boolean;
  small?: boolean;
} & TouchableOpacityProps;

export { IProps, IViewProps };
