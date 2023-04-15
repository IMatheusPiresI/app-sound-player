import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { theme } from '@resources/theme';
import { AppRoutes } from '@routes/Stack/stack.routes';
import { navigationRef } from '@routes/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';

import { NativeBaseProvider } from 'native-base';

import 'react-native-gesture-handler';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar translucent backgroundColor="transparent" style="light" />
        <AppRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
