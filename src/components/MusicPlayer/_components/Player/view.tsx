import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LinearGradient } from 'expo-linear-gradient';

import { Box, HStack } from 'native-base';

import { IViewProps } from './types';

const Player: React.FC<IViewProps> = ({
  handleGoNextSong,
  handleGoPrevSong,
  handleTogglePlay,
  isPlaying,
}) => {
  const renderIconPlayOrPause = () => {
    if (isPlaying) {
      return <MaterialIcons name="pause" size={30} color="#000000" />;
    }

    return <MaterialIcons name="play-arrow" size={30} color="#000000" />;
  };

  return (
    <HStack justifyContent={'space-between'} alignItems="center">
      <Box>
        <TouchableOpacity>
          <MaterialIcons name="shuffle" size={30} color="#AAA" />
        </TouchableOpacity>
      </Box>
      <HStack justifyContent={'center'} alignItems="center">
        <Box>
          <TouchableOpacity onPress={handleGoPrevSong}>
            <AntDesign name="banckward" size={30} color="#FFF" />
          </TouchableOpacity>
        </Box>
        <TouchableOpacity
          style={styles.buttonPlay}
          onPress={handleTogglePlay}
          activeOpacity={0.7}
        >
          <LinearGradient
            colors={['#00eaff', '#7ff9fb', '#b7feff']}
            style={styles.container}
          >
            {renderIconPlayOrPause()}
          </LinearGradient>
        </TouchableOpacity>
        <Box>
          <TouchableOpacity onPress={handleGoNextSong}>
            <AntDesign name="forward" size={30} color="#FFF" />
          </TouchableOpacity>
        </Box>
      </HStack>
      <Box>
        <TouchableOpacity>
          <MaterialIcons name="loop" size={30} color="#AAA" />
        </TouchableOpacity>
      </Box>
    </HStack>
  );
};

export default Player;

const styles = StyleSheet.create({
  buttonPlay: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginHorizontal: 32,
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
