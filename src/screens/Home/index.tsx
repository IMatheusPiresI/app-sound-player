import React from 'react';

import { Header } from '@components/Header';
import { BarSelectType } from '@components/BarSelectType';

import { Text, VStack } from 'native-base';

const Home: React.FC = () => (
  <VStack flex={1} background={'#101213'}>
    <Header />
    <BarSelectType />
    <Text>Open up App.js to start working on your app!</Text>
  </VStack>
);

export default Home;
