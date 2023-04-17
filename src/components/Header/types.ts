import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

type IProps = {
  iconLeft: keyof typeof MaterialIcons.glyphMap;
  iconMid: keyof typeof FontAwesome5.glyphMap;
  iconRight: keyof typeof MaterialIcons.glyphMap;
  textMid: string;
  handleIconLeftPress?: () => void;
  handleIconRightPress?: () => void;
};

type IViewProps = {
  iconLeft: keyof typeof MaterialIcons.glyphMap;
  iconMid: keyof typeof FontAwesome5.glyphMap;
  iconRight: keyof typeof MaterialIcons.glyphMap;
  textMid: string;
  handleIconLeftPress?: () => void;
  handleIconRightPress?: () => void;
};

export { IProps, IViewProps };
