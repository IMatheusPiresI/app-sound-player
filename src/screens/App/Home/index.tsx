import React, { useCallback, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { Header } from '@components/Header';
import { BarSelectType } from '@components/BarSelectType';
import { CarouselMusic } from '@components/CarouselMusic';
import { GenreSection } from '@components/GenreSection';
import { LinearGradient } from 'expo-linear-gradient';
import { getAllMusics } from '@services/firebase/collections/musics';
import { useMusicStore } from '@store/musics';

import { ScrollView, VStack } from 'native-base';

const Home: React.FC = () => {
  const { setAllMusics } = useMusicStore((state) => state);
  const getMusics = useCallback(async () => {
    const allMusics = await getAllMusics();
    setAllMusics(allMusics);
  }, [setAllMusics]);

  useEffect(() => {
    getMusics();
  }, [getMusics]);

  return (
    <LinearGradient
      colors={['#262c2c', '#171414', '#262c2c']}
      style={styles.container}
    >
      <ScrollView flexGrow={1} showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </LinearGradient>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
