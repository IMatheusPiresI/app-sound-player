import React from 'react';
import { StyleSheet } from 'react-native';

import { CardGenre } from '@components/CardGenre';
import mockGenres from '@resources/mocks/mockGenres';

import { Box, FlatList, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const GenreSectionView: React.FC<IViewProps> = () => (
  <VStack mt="12">
    <Box w="full" alignItems={'center'} justifyContent="center">
      <Text fontWeight={'bold'} color={'#cacaca'} fontSize="22">
        Genre
      </Text>
    </Box>
    <Box>
      <FlatList
        data={mockGenres}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEventThrottle={16}
        decelerationRate="fast"
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
        overScrollMode="never"
        renderItem={({ item }) => <CardGenre genre={item} />}
      />
    </Box>
  </VStack>
);
export default GenreSectionView;

const styles = StyleSheet.create({
  list: {
    gap: 32,
    marginTop: 20,
    paddingHorizontal: 20,
  },
});
