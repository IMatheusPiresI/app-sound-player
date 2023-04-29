import React from 'react';
import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@components/Header';
import { InputSearch } from '@components/Form/InputSearch';

import { Box, FlatList, VStack } from 'native-base';

import { IViewProps } from './types';
import { CardPlaylist } from './CardPlaylist';

const PlaylistsView: React.FC<IViewProps> = () => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <VStack flex={1} pt="statusBarHeight">
      <Header textMid="Playlists" iconMid="album" />
      <Box px="screenWidth5" mt="0" mb="4">
        <InputSearch />
      </Box>
      <VStack flex={1}>
        <FlatList
          data={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
          ]}
          keyExtractor={(item) => item}
          px={'screenWidth5'}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={2}
          contentContainerStyle={styles.contentContainerList}
          renderItem={() => <CardPlaylist />}
        />
      </VStack>
    </VStack>
  </LinearGradient>
);

export default PlaylistsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainerList: {
    gap: 10,
  },
});
