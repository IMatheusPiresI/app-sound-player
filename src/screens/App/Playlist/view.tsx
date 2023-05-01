import React from 'react';
import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@components/Header';
import metrics from '@resources/theme/metrics';

import { Box, Image, VStack } from 'native-base';

import { IViewProps } from './types';

const PlaylistCreateView: React.FC<IViewProps> = ({}) => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <VStack flex={1} pt="statusBarHeight">
      <Header
        textMid="Create Playlist"
        iconMid="album"
        iconLeft="chevron-left"
      />
      <VStack flex={1}>
        <Box w="full" h="20">
          <Image
            source={{
              uri: '',
            }}
            alt="selected image"
          />
        </Box>
      </VStack>
    </VStack>
  </LinearGradient>
);

export default PlaylistCreateView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainerList: {
    gap: 10,
    paddingTop: 60,
    paddingHorizontal: metrics.screenWidth5,
    paddingBottom: metrics.tabBarHeight + 20,
    flexGrow: 1,
  },

  searchFront: {},
});
