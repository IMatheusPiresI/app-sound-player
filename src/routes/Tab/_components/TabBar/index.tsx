import { Platform, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useCallback, useEffect } from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { AudioMiniPlayer } from '@components/AudioMiniPlayer';
import { logout } from '@services/firebase/auth';

import { Box, HStack } from 'native-base';

import { IIconName, IRouteNames } from './types';

export function MyTabBar({ state, navigation }: BottomTabBarProps) {
  const keyboardAnimate = useSharedValue(0);

  const rAnimatedKeyboard = useAnimatedStyle(() => ({
    maxHeight: interpolate(keyboardAnimate.value, [0, 1], [144, 0]),
    overflow: 'hidden',
  }));

  const hideTabBarOnKeyboardShow = useCallback(() => {
    keyboardAnimate.value = withTiming(1, { duration: 400 });
  }, [keyboardAnimate]);

  const showTabBarOnKeyboardDown = useCallback(() => {
    keyboardAnimate.value = withTiming(0, { duration: 400 });
  }, [keyboardAnimate]);

  useEffect(() => {
    const hideTab = Keyboard.addListener(
      'keyboardDidShow',
      hideTabBarOnKeyboardShow,
    );

    const showTab = Keyboard.addListener(
      'keyboardDidHide',
      showTabBarOnKeyboardDown,
    );

    return () => {
      hideTab.remove();
      showTab.remove();
    };
  }, [hideTabBarOnKeyboardShow, showTabBarOnKeyboardDown]);

  return (
    <Animated.View style={[rAnimatedKeyboard, styles.positionTab]}>
      <Box
        w="full"
        backgroundColor="#262c2c"
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
                if (route.name === 'Profile') {
                  logout();
                  return;
                }
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
              Playlists: 'album',
              Profile: 'logout',
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
                    color={
                      isFocused
                        ? '#FFFFFF'
                        : route.name === 'Profile'
                        ? '#ff4141'
                        : '#FFF5'
                    }
                    style={isFocused && styles.iconShadow}
                  />
                </Box>
              </TouchableOpacity>
            );
          })}
        </HStack>
      </Box>
    </Animated.View>
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

  positionTab: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
