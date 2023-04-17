import React from 'react';

import { Box, VStack } from 'native-base';

import { IViewProps } from './types';
import { Slider } from './_components/Slider';
import { Player } from './_components/Player';

const MusicPlayerView: React.FC<IViewProps> = ({
  handleGoNextSong,
  handleGoPrevSong,
  handleTogglePlay,
  isPlaying,
}) => (
  <VStack flex={1} justifyContent="space-between" pb="bottomSpace">
    <Slider />
    <Box w="full" pb="2">
      <Player
        handleGoNextSong={handleGoNextSong}
        handleGoPrevSong={handleGoPrevSong}
        handleTogglePlay={handleTogglePlay}
        isPlaying={isPlaying}
      />
    </Box>
  </VStack>
);

export default MusicPlayerView;
