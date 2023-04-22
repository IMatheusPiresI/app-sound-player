import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from '@resources/theme';
import { navigationRef } from '@routes/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { observableUserAuth } from '@services/firebase/auth';
import { AppRoutes } from '@routes/index';

import 'react-native-gesture-handler';

import { NativeBaseProvider } from 'native-base';

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [initializing, setInitializing] = useState<boolean>(true);
  useEffect(() => {
    observableUserAuth({
      initializing,
      setInitializing,
    });

    return observableUserAuth({
      initializing,
      setInitializing,
    });
  }, [initializing]);

  if (!initializing) {
    SplashScreen.hideAsync();
  }

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar translucent backgroundColor="transparent" style="light" />
        <AppRoutes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
