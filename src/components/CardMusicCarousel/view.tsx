import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import metrics from '@resources/theme/metrics';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Box, HStack, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const CardMusicCarouselView: React.FC<IViewProps> = ({
  rAnimatedCardVisible,
  music,
}) => (
  <Animated.View
    style={[rAnimatedCardVisible, styles.container, styles.shadow]}
  >
    <Box w={'full'} h="full" borderRadius={'40'} overflow={'hidden'}>
      <ImageBackground
        source={{
          uri: music.imageBanner,
        }}
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <Box
        position={'absolute'}
        bottom={0}
        alignItems="center"
        justifyContent={'center'}
        h={'24'}
        w="full"
      >
        <HStack
          w="86%"
          h={20}
          background={'#7b7373b8'}
          borderRadius="3xl"
          px="6"
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <VStack flex={1}>
            <Text
              color={'#fff'}
              fontWeight="medium"
              fontSize={'18'}
              numberOfLines={1}
            >
              {music.musicName}
            </Text>
            <Text color={'#efe5e5'} fontWeight="normal" fontSize={'14'}>
              {music.musicGenre}
            </Text>
          </VStack>
          <Box alignItems={'center'} justifyContent="center">
            <TouchableOpacity>
              <MaterialIcons
                name="play-circle-filled"
                size={50}
                color="#00ecf4"
              />
            </TouchableOpacity>
          </Box>
        </HStack>
      </Box>
    </Box>
  </Animated.View>
);
export default CardMusicCarouselView;

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth70,
    backgroundColor: '#000',
    marginHorizontal: 20,
    borderRadius: 40,
  },
  shadow: {
    elevation: 10,
    shadowColor: '#171717',
    shadowOpacity: 1,
    shadowOffset: { height: 4, width: 0 },
  },
  imageBackground: {
    flex: 1,
  },
});
