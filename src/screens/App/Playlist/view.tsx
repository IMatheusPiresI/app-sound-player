import React from 'react';
import { ListRenderItemInfo, StyleSheet, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@components/Header';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CardMusicListPlay } from '@components/CardMusicListPlay';
import { IMusic } from '@components/CarouselMusic/types';
import { ModalAddMusicsPlaylist } from '@components/ModalAddMusicsPlaylist';

import { Box, FlatList, HStack, Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const PlaylistView: React.FC<IViewProps> = ({
  playlist,
  showModalAddMusic,
  handlePlayPlaylist,
  handleGoBack,
  handleCloseModalAddMusic,
  handleOpenModalAddMusic,
}) => {
  const renderListItem = ({ item }: ListRenderItemInfo<IMusic>) => (
    <CardMusicListPlay music={item} />
  );

  return (
    <LinearGradient
      colors={['#262c2c', '#171414', '#262c2c']}
      style={styles.container}
    >
      <VStack flex={1} pt="statusBarHeight">
        <Header
          textMid="Playlist"
          iconMid="album"
          iconLeft="chevron-left"
          handleIconLeftPress={handleGoBack}
        />
        <VStack flex={1}>
          <Box w="full" alignItems={'center'} mt="2">
            <Image
              source={{
                uri: playlist.imageBanner,
              }}
              alt="selected image"
              w={'40'}
              h={'40'}
            />
          </Box>
          <HStack w="full" px="6" mt="2" alignItems={'center'}>
            <Box flex={1}>
              <Text color="white" fontSize={16} numberOfLines={1}>
                {playlist.name}
              </Text>
              <HStack alignItems={'center'} mt="1">
                <MaterialIcons name="person" size={16} color="white" />
                <Text color="white" fontSize={12} ml="1">
                  Creator
                </Text>
              </HStack>
              <HStack alignItems={'center'} mt="1">
                <MaterialIcons name="music-note" size={16} color="white" />
                <Text color="white" fontSize={12} ml="1">
                  {playlist?.musics?.length > 1
                    ? playlist.musics.length + ' musics'
                    : playlist.musics.length + ' music'}
                </Text>
              </HStack>
            </Box>
            <TouchableOpacity activeOpacity={0.6} onPress={handlePlayPlaylist}>
              <Box
                w="14"
                h="14"
                borderRadius={'full'}
                borderWidth={1}
                borderColor={'white'}
                alignItems={'center'}
                justifyContent={'center'}
                overflow={'hidden'}
              >
                <LinearGradient
                  colors={['#fff8', '#fff8', '#000']}
                  style={styles.gradientPlay}
                >
                  <MaterialIcons name="play-arrow" size={40} color="white" />
                </LinearGradient>
              </Box>
            </TouchableOpacity>
          </HStack>
          <VStack flex={1} mt="2">
            <FlatList
              data={playlist.musics}
              keyExtractor={(item) => item.id}
              renderItem={renderListItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerList}
              ListHeaderComponent={() => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={handleOpenModalAddMusic}
                >
                  <HStack h="16" bgColor={'#fff1'} alignItems={'center'} px="4">
                    <Box
                      w="12"
                      h="12"
                      alignItems={'center'}
                      justifyContent={'center'}
                      backgroundColor={'#fff1'}
                    >
                      <MaterialIcons name="add" size={38} color="#fff6" />
                    </Box>
                    <Text color="white" fontSize={16} ml="4">
                      Add music to playlist
                    </Text>
                  </HStack>
                </TouchableOpacity>
              )}
            />
          </VStack>
        </VStack>
        <ModalAddMusicsPlaylist
          isVisible={showModalAddMusic}
          handleClose={handleCloseModalAddMusic}
          playlist={playlist}
        />
      </VStack>
    </LinearGradient>
  );
};

export default PlaylistView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainerList: {
    gap: 1,
  },

  gradientPlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
