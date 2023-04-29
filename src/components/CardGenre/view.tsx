import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Box, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const CardGenreView: React.FC<IViewProps> = ({ genre }) => (
  <VStack style={styles.shadow}>
    <Box w="24" h="24" borderRadius={'3xl'} overflow="hidden">
      <ImageBackground
        source={{
          uri: genre.imageBanner,
        }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={[
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            'transparent',
            '#0001',
            '#0005',
            '#0005',
            '#0008',
            '#000',
          ]}
          style={styles.linearGradient}
        >
          <Text
            fontWeight={'bold'}
            bottom={4}
            position="absolute"
            fontSize={'16'}
            color="white"
          >
            {genre.genre}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </Box>
  </VStack>
);
export default CardGenreView;

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },

  linearGradient: {
    width: '100%',
    height: '100%',
    zIndex: 99,
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
  },
  shadow: {
    shadowColor: '#fff',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
