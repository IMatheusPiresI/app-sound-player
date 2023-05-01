import React from 'react';
import { TouchableOpacity } from 'react-native';

import { InputForm } from '@components/Form/InputForm';

import { Box, Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const FormCreatePlaylistView: React.FC<IViewProps> = ({
  imagePlaylist,
  playlistName,
  setPlaylistName,
  handleOpenGallery,
}) => (
  <VStack>
    <Text
      color="white"
      fontSize={16}
      fontWeight={'medium'}
      textAlign={'center'}
    >
      Create PlayList
    </Text>
    <Box alignItems={'center'} justifyContent={'center'} mt="8">
      <TouchableOpacity onPress={handleOpenGallery}>
        <Image
          source={{
            uri:
              imagePlaylist ??
              'https://i.pinimg.com/736x/a1/72/1e/a1721e36d881dba6393f04b60e80181b.jpg',
          }}
          alt="playlist image"
          resizeMode="cover"
          w="40"
          h="40"
        />
      </TouchableOpacity>
    </Box>
    <Box mt="8">
      <InputForm
        label="Playlist name"
        value={playlistName}
        onChangeText={setPlaylistName}
      />
    </Box>
  </VStack>
);

export default FormCreatePlaylistView;
