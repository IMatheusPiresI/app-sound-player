import { Platform, StyleSheet, TouchableOpacity } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AudioMiniPlayer } from '@components/AudioMiniPlayer';

import { Box, HStack } from 'native-base';

import { IIconName, IRouteNames } from './types';

export function MyTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <Box
      w="full"
      backgroundColor="transparent"
      position={'absolute'}
      bottom={0}
      pb={Platform.OS === 'ios' ? '2' : '0'}
    >
      <AudioMiniPlayer />
      <HStack w="full" h="20">
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              // navigate(route.name, { merge: true });
              navigation.navigate(route.name, { merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const iconName: IIconName = {
            Home: 'home',
            Favorites: 'favorite',
            Album: 'album',
            Profile: 'person',
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <Box flex={1} alignItems="center" justifyContent="center">
                <MaterialIcons
                  name={iconName[route.name as IRouteNames]}
                  size={42}
                  color={isFocused ? '#FFFFFF' : '#FFF5'}
                  style={isFocused && styles.iconShadow}
                />
              </Box>
            </TouchableOpacity>
          );
        })}
      </HStack>
    </Box>
  );
}

const styles = StyleSheet.create({
  buttonTab: {
    flex: 1,
  },

  iconShadow: {
    shadowColor: '#fff',
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
