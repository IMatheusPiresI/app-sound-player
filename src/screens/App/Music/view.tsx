import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@components/Header';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { MusicPlayer } from '@components/MusicPlayer';

import { Box, HStack, Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';
const MusicView: React.FC<IViewProps> = ({
  currentSong,
  selectedMusicId,
  isFavorited,
  playList,
  handleToogleFavorite,
  handleGoBack,
  setMusicId,
}) => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <VStack pt="statusBarHeight" pb="bottomSpace" flex={1}>
      <Header
        iconLeft="chevron-left"
        iconMid="volume-up"
        iconRight="queue-music"
        textMid="Playing now"
        handleIconLeftPress={handleGoBack}
      />
      <Box alignItems={'center'} justifyContent={'center'} mt="8">
        <Box
          w={'screenWidth80'}
          h={'screenHeight45'}
          borderRadius={'3xl'}
          style={styles.shadow}
        >
          <Image
            source={{ uri: currentSong.imageBanner }}
            alt="music"
            borderRadius={'3xl'}
            w={'full'}
            h={'full'}
          />
        </Box>
      </Box>
      <VStack w="full" mt="12" px="12">
        <HStack w="full">
          <Text
            color={'#fff'}
            fontSize="26"
            fontWeight="medium"
            numberOfLines={1}
            flex={1}
            bgColor={'red.200'}
          >
            {currentSong.musicName}
          </Text>
          <TouchableOpacity onPress={handleToogleFavorite}>
            <MaterialIcons
              name="favorite"
              size={34}
              color={isFavorited ? '#00e5ff' : '#fff4'}
            />
          </TouchableOpacity>
        </HStack>
        <Text
          color={'#fff5'}
          fontSize="18"
          fontWeight="medium"
          mt="2"
          numberOfLines={1}
        >
          {currentSong.creator}
        </Text>
      </VStack>
      <Box px="12" flex={1}>
        <MusicPlayer
          playList={playList}
          setMusicId={setMusicId}
          idMusicSelected={selectedMusicId}
        />
      </Box>
    </VStack>
  </LinearGradient>
);

export default MusicView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    elevation: 10,
    shadowRadius: 8,
    shadowColor: '#171717',
    shadowOpacity: 1,
    shadowOffset: { height: 4, width: 0 },
  },
});
