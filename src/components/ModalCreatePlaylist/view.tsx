import React from 'react';
import RNModal from 'react-native-modal';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Button } from '@components/Button';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';

import { Box, VStack } from 'native-base';

import { IViewProps } from './types';
import { FormCreatePlaylist } from './_components/FormCreatePlaylist';

const ModalCreatePlaylistView: React.FC<IViewProps> = ({
  isVisible,
  imagePlaylist,
  playlistName,
  validStep,
  handleNextStep,
  setPlaylistName,
  setImagePlaylist,
  handleClose,
}) => (
  <RNModal
    isVisible={isVisible}
    onBackdropPress={handleClose}
    onBackButtonPress={handleClose}
    animationIn={'fadeIn'}
    animationInTiming={400}
    animationOut={'fadeOut'}
    animationOutTiming={400}
  >
    <KeyboardDismiss>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <VStack
          flex={1}
          bg={'#262c2c'}
          maxHeight="modalCreatePlaylist"
          borderRadius={10}
          py="4"
          px="4"
          overflow="hidden"
        >
          <VStack flex={1} justifyContent={'space-between'}>
            <FormCreatePlaylist
              imagePlaylist={imagePlaylist}
              playlistName={playlistName}
              setPlaylistName={setPlaylistName}
              setImagePlaylist={setImagePlaylist}
            />
            <Box mt="4">
              <Button
                title="Next"
                disabled={!validStep}
                onPress={handleNextStep}
              />
            </Box>
          </VStack>
        </VStack>
      </KeyboardAvoidingView>
    </KeyboardDismiss>
  </RNModal>
);

export default ModalCreatePlaylistView;
