import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Box, HStack, Text } from 'native-base';

import { IViewProps } from './types';

const CardPlaylist: React.FC<IViewProps> = ({
  playlist,
  handleGoToPlaylist,
}) => (
  <TouchableOpacity onPress={handleGoToPlaylist} activeOpacity={0.7}>
    <Box
      w="screenWidth44"
      h="screenHeight20"
      flexDir={'row'}
      borderRadius={'8'}
      overflow={'hidden'}
    >
      <ImageBackground
        source={{
          uri:
            playlist.imageBanner !== ''
              ? playlist.imageBanner
              : playlist.musics[0].imageBanner,
        }}
        resizeMode="cover"
        style={styles.container}
      >
        <LinearGradient
          colors={[
            'transparent',
            'transparent',
            '#0005',
            '#0006',
            '#0008',
            '#0009',
            '#0009',
            '#000',
          ]}
          style={styles.container}
        >
          <Box flex={1} justifyContent={'flex-end'} py="4" px="2">
            <Text color="white" numberOfLines={1} fontSize={14}>
              {playlist.name}
            </Text>
            <HStack alignItems={'center'}>
              <MaterialIcons name="music-note" size={14} color="white" />
              <Text color="white" numberOfLines={1} fontSize={10} ml="1">
                {playlist?.musics?.length > 1
                  ? playlist.musics?.length + ' musics'
                  : playlist.musics?.length + ' music'}
              </Text>
            </HStack>
          </Box>
        </LinearGradient>
      </ImageBackground>
    </Box>
  </TouchableOpacity>
);

export default CardPlaylist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
