import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { Text, VStack } from 'native-base';

const Home: React.FC = () => (
  <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
  </VStack>
);

export default Home;
