import React, { useCallback } from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';

import { InputSearch } from '@components/Form/InputSearch';
import { CardMusicSelect } from '@components/CardMusicSelect';
import { IMusic } from '@components/CarouselMusic/types';

import { Box, FlatList, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const SelectMusicsPlaylistView: React.FC<IViewProps> = ({
  allMusics,
  selectedMusics,
  filteredMusics,
  search,
  setSearch,
  toggleSelectMusic,
}) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IMusic>) => (
      <CardMusicSelect
        music={item}
        isActive={selectedMusics.some((song) => song.id === item.id)}
        onPress={() => toggleSelectMusic(item)}
      />
    ),
    [selectedMusics, toggleSelectMusic],
  );

  return (
    <VStack justifyItems={'center'} w="full" flex={1}>
      <Text
        color="white"
        fontSize={16}
        fontWeight={'medium'}
        textAlign={'center'}
      >
        Select Musics PlayList
      </Text>
      <Box mt="2" h={'10'}>
        <InputSearch
          placeholder="Search musics"
          value={search}
          onChangeText={setSearch}
        />
      </Box>
      <VStack flex={1} my="2">
        {search.length > 0 ? (
          <FlatList
            data={filteredMusics}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />
        ) : (
          <FlatList
            data={allMusics}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />
        )}
      </VStack>
    </VStack>
  );
};

export default SelectMusicsPlaylistView;

const styles = StyleSheet.create({
  contentList: {
    gap: 4,
  },
});
