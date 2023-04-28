import { MaterialIcons } from '@expo/vector-icons';

export type IRouteNames = 'Home' | 'Favorites' | 'Playlists' | 'Profile';

export type IIconName = {
  Home: keyof typeof MaterialIcons.glyphMap;
  Favorites: keyof typeof MaterialIcons.glyphMap;
  Playlists: keyof typeof MaterialIcons.glyphMap;
  Profile: keyof typeof MaterialIcons.glyphMap;
};
