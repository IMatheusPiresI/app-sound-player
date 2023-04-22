import { TouchableOpacityProps } from 'react-native';

type IProps = {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
} & TouchableOpacityProps;

type IViewProps = {
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
} & TouchableOpacityProps;

export { IProps, IViewProps };
