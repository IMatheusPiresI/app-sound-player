import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { CardMusicCarousel } from '@components/CardMusicCarousel';
import metrics from '@resources/theme/metrics';

import { Box } from 'native-base';

import { IMusic, IViewProps } from './types';

const CarouselMusicView: React.FC<IViewProps> = ({
  activeIndex,
  allMusics,
  onScroll,
  handleGoToMusic,
}) => {
  const renderItem = useCallback(
    ({ item, index }: ListRenderItemInfo<IMusic>) => (
      <CardMusicCarousel
        index={index}
        activeIndex={activeIndex}
        music={item}
        onPress={() => handleGoToMusic(item)}
      />
    ),
    [activeIndex, handleGoToMusic],
  );

  return (
    <Box>
      <Animated.FlatList
        removeClippedSubviews
        data={allMusics}
        keyExtractor={(item) => item.id}
        snapToInterval={metrics.screenWidth70 + 40.5}
        decelerationRate="fast"
        scrollEventThrottle={16}
        contentContainerStyle={styles.list}
        getItemLayout={(_, index) => ({
          length: metrics.screenWidth70 + 40,
          offset: (metrics.screenWidth70 + 40) * index,
          index,
        })}
        initialNumToRender={4}
        maxToRenderPerBatch={4}
        windowSize={8}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={onScroll}
        renderItem={renderItem}
        overScrollMode="never"
      />
    </Box>
  );
};
export default CarouselMusicView;

const styles = StyleSheet.create({
  list: {
    height: metrics.screenHeight38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.screenWidth * 0.15 - 20,
  },
});
