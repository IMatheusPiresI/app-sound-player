import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ModalConfirmExclude } from '@components/ModalConfirmExclude';

import { Box, HStack, Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const CardMusicListPlayView: React.FC<IViewProps> = ({
  music,
  showModalDelete,
  rAnimatedRemoveFavorite,
  onPlay,
  handleCloseModalExclude,
  handleShowModalExclude,
  handleDeleteMusicPlaylist,
}) => (
  <>
    <Animated.View style={rAnimatedRemoveFavorite}>
      <Box w="full" alignItems="center">
        <HStack
          w={'full'}
          h="full"
          bgColor={'#fff1'}
          borderRadius="6"
          px="4"
          alignItems="center"
        >
          <Image
            source={{
              uri: music.imageBanner,
            }}
            w="12"
            h="12"
            alt="current music"
          />
          <VStack flex={1} ml="4" pr="2">
            <Text
              color="#fff"
              fontSize={13}
              fontWeight="bold"
              numberOfLines={1}
            >
              {music.musicName}
            </Text>
            <Text
              color="#fff7"
              fontSize={14}
              fontWeight="bold"
              numberOfLines={1}
            >
              {music.creator}
            </Text>
          </VStack>
          <HStack alignItems={'center'} space="2">
            <TouchableOpacity activeOpacity={0.6} onPress={() => onPlay(music)}>
              <MaterialIcons name="play-arrow" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={handleShowModalExclude}
            >
              <MaterialIcons name="delete" size={24} color="#ec3939" />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
    </Animated.View>
    <ModalConfirmExclude
      title="Do you want to delete this music?"
      message="Deleting this music will remove it from your listing and will not be recoverable."
      cancelButtonCallback={handleCloseModalExclude}
      confirmButtonCallback={handleDeleteMusicPlaylist}
      isVisible={showModalDelete}
    />
  </>
);

export default CardMusicListPlayView;
