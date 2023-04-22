import { TextInput, TextInputProps } from 'react-native';

type IProps = { label: string; secret?: boolean } & TextInputProps;

type IViewProps = {
  label: string;
  secret?: boolean;
  rAnimatedLabelContainer: {
    bottom: number;
    left: number;
    position: 'absolute';
  };
  rAnimatedLabel: {
    fontSize: number;
  };
  inputRef: React.RefObject<TextInput>;
  handleToogleShowPassword: () => void;
  showPassword: boolean;
  handleFocus: () => void;
  onFocus: () => void;
  onBlur: () => void;
} & TextInputProps;

export { IProps, IViewProps };
