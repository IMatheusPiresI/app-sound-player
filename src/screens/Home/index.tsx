import React from 'react';
import { StyleSheet } from 'react-native';

import { Header } from '@components/Header';
import { BarSelectType } from '@components/BarSelectType';
import { CarouselMusic } from '@components/CarouselMusic';
import { GenreSection } from '@components/GenreSection';
import { LinearGradient } from 'expo-linear-gradient';

import { VStack } from 'native-base';

const Home: React.FC = () => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <VStack flex={1} pt="statusBarHeight">
      <Header
        iconLeft="notifications"
        iconMid="microphone-alt"
        iconRight="search"
        textMid="Podcasts"
      />
      <BarSelectType />
      <CarouselMusic />
      <GenreSection />
    </VStack>
  </LinearGradient>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
