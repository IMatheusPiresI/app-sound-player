import React from 'react';
import { StyleSheet } from 'react-native';

import { Header } from '@components/Header';
import { BarSelectType } from '@components/BarSelectType';
import { CarouselMusic } from '@components/CarouselMusic';
import { GenreSection } from '@components/GenreSection';
import { LinearGradient } from 'expo-linear-gradient';
import metrics from '@resources/theme/metrics';

import { ScrollView, VStack } from 'native-base';

const Home: React.FC = () => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <ScrollView
      flexGrow={1}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.containerScroll}
    >
      <VStack flex={1} pt="statusBarHeight">
        <Header
          iconLeft="notifications"
          iconMid="library-music"
          iconRight="search"
          textMid="Musics"
        />
        <BarSelectType />
        <CarouselMusic />
        <GenreSection />
      </VStack>
    </ScrollView>
  </LinearGradient>
);
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    paddingBottom: metrics.tabBarHeight + 20,
  },
});
