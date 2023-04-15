import { MaterialIcons } from '@expo/vector-icons';

export type IRouteNames = 'Home' | 'Favorites' | 'Music' | 'Profile';

export type IIconName = {
  Home: keyof typeof MaterialIcons.glyphMap;
  Favorites: keyof typeof MaterialIcons.glyphMap;
  Music: keyof typeof MaterialIcons.glyphMap;
  Profile: keyof typeof MaterialIcons.glyphMap;
};
