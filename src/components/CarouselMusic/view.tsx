import React from 'react';
import { StyleSheet } from 'react-native';

import { CardMusicCarousel } from '@components/CardMusicCarousel';
import metrics from '@resources/theme/metrics';
import mockMusics from '@resources/mocks/mockMusics';

import { Box, FlatList } from 'native-base';

import { IViewProps } from './types';

const CarouselMusicView: React.FC<IViewProps> = ({
  scrollRef,
  activeIndex,
  onScroll,
  handleGoToMusic,
}) => (
  <Box>
    <FlatList
      ref={scrollRef}
      data={mockMusics}
      keyExtractor={(item) => item.id}
      snapToInterval={metrics.screenWidth70 + 40.5}
      decelerationRate="fast"
      scrollEventThrottle={16}
      contentContainerStyle={styles.list}
      initialNumToRender={4}
      horizontal
      onScroll={onScroll}
      renderItem={({ item, index }) => (
        <CardMusicCarousel
          index={index}
          activeIndex={activeIndex}
          music={item}
          onPress={() => handleGoToMusic(item)}
        />
      )}
      overScrollMode="never"
    />
  </Box>
);
export default CarouselMusicView;

const styles = StyleSheet.create({
  list: {
    height: metrics.screenHeight38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.screenWidth * 0.15 - 20,
  },
});
