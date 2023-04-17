import { MaterialIcons } from '@expo/vector-icons';

export type IRouteNames = 'Home' | 'Favorites' | 'Album' | 'Profile';

export type IIconName = {
  Home: keyof typeof MaterialIcons.glyphMap;
  Favorites: keyof typeof MaterialIcons.glyphMap;
  Album: keyof typeof MaterialIcons.glyphMap;
  Profile: keyof typeof MaterialIcons.glyphMap;
};
