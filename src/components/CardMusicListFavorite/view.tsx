import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ModalConfirmExclude } from '@components/ModalConfirmExclude';

import { Box, HStack, Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const CardMusicListFavoriteView: React.FC<IViewProps> = ({
  music,
  showModalRemoveFavorite,
  rAnimatedRemoveFavorite,
  deleteAnimate,
  handlePlayMusicToFavorites,
  handleShowModalRemoveFavorite,
  handleCloseModalRemoveFavorite,
}) => (
  <>
    <Animated.View style={rAnimatedRemoveFavorite}>
      <Box w="full" alignItems="center">
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePlayMusicToFavorites}
        >
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
            <HStack alignItems={'center'}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={handlePlayMusicToFavorites}
              >
                <MaterialIcons name="play-arrow" size={30} color="#fff" />
              </TouchableOpacity>
              <Box ml="2">
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={handleShowModalRemoveFavorite}
                >
                  <MaterialIcons name="favorite" size={24} color="#00e5ff" />
                </TouchableOpacity>
              </Box>
            </HStack>
          </HStack>
        </TouchableOpacity>
      </Box>
    </Animated.View>
    <ModalConfirmExclude
      title="Do you want to remove this music for favorites?"
      message="Deleting this music will remove it from your listing."
      cancelButtonCallback={handleCloseModalRemoveFavorite}
      confirmButtonCallback={deleteAnimate}
      isVisible={showModalRemoveFavorite}
    />
  </>
);

export default CardMusicListFavoriteView;
