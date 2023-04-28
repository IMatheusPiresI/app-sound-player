import React from 'react';
import Animated from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '@components/Button';

import { Box } from 'native-base';

import { IViewProps } from './types';

const BannerFavoriteMusic: React.FC<IViewProps> = ({
  rAnimatedBoxBanner,
  rAnimatedImageBanner,
  randomSong,
  handlePlayMusicToFavorites,
}) => (
  <Animated.View style={[rAnimatedBoxBanner]}>
    <Animated.Image
      source={{
        uri: randomSong.imageBanner,
      }}
      resizeMode="cover"
      style={[rAnimatedImageBanner, styles.imageBackground]}
    />
    <LinearGradient
      style={[styles.container, styles.flexCenter]}
      colors={['transparent', 'transparent', 'transparent', '#0008', '#171717']}
    >
      <Box position={'absolute'}>
        <Button
          title="Ouvir agora"
          variant="black80"
          onPress={handlePlayMusicToFavorites}
        />
      </Box>
    </LinearGradient>
  </Animated.View>
);

export default BannerFavoriteMusic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
