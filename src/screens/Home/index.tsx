import React from 'react';

import { Header } from '@components/Header';
import { BarSelectType } from '@components/BarSelectType';
import { CarouselMusic } from '@components/CarouselMusic';
import { GenreSection } from '@components/GenreSection';
import { LinearGradient } from 'expo-linear-gradient';

import { VStack } from 'native-base';

const Home: React.FC = () => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={{ flex: 1 }}
  >
    <VStack flex={1} pt="statusBarHeight">
      <Header />
      <BarSelectType />
      <CarouselMusic />
      <GenreSection />
    </VStack>
  </LinearGradient>
);

export default Home;
