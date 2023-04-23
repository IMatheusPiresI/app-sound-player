import { TextInput, TextInputProps } from 'react-native';

type IProps = {} & TextInputProps;

type IViewProps = {
  inputRef: React.RefObject<TextInput>;
  handleFocus: () => void;
} & TextInputProps;

export { IProps, IViewProps };
