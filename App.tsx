import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { theme } from '@resources/theme';

import { NativeBaseProvider } from 'native-base';

import Home from './src/screens/Home';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <Home />
    </NativeBaseProvider>
  );
}
