import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, Text, VStack } from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </VStack>
    </NativeBaseProvider>
  );
}
