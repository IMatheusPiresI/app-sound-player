import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Box } from 'native-base';

import { IViewProps } from './types';

const CardPlaylist: React.FC<IViewProps> = () => (
  <Box
    w="screenWidth44"
    h="screenHeight20"
    flexDir={'row'}
    borderRadius={'8'}
    overflow={'hidden'}
  >
    <ImageBackground
      source={{
        uri: 'https://cdnb.artstation.com/p/assets/images/images/014/312/045/large/hlulani-brx-nukeri-dabi.jpg?1543439933',
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
      />
    </ImageBackground>
  </Box>
);

export default CardPlaylist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
