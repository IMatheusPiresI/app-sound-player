import React from 'react';
import RNModal from 'react-native-modal';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { Button } from '@components/Button';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import metrics from '@resources/theme/metrics';

import { Box, VStack } from 'native-base';

import { IViewProps } from './types';
import { FormCreatePlaylist } from './_components/FormCreatePlaylist';
import { SelectMusicsPlaylist } from './_components/SelectMusicsPlaylist';

const ModalCreatePlaylistView: React.FC<IViewProps> = ({
  isVisible,
  imagePlaylist,
  playlistName,
  validStep,
  rAnimateFormCreatePlaylist,
  selectedMusics,
  rAnimateSelectMusics,
  handleToogleSelectMusic,
  handleNextStep,
  setPlaylistName,
  setImagePlaylist,
  handleCloseModal,
}) => (
  <RNModal
    isVisible={isVisible}
    onBackdropPress={handleCloseModal}
    onBackButtonPress={handleCloseModal}
    animationIn={'fadeIn'}
    avoidKeyboard
    animationInTiming={400}
    animationOut={'fadeOut'}
    animationOutTiming={400}
    style={styles.modal}
  >
    <KeyboardDismiss>
      <VStack
        bg={'#262c2c'}
        w={'full'}
        h={'full'}
        maxHeight="modalCreatePlaylist"
        borderRadius={10}
        overflow="hidden"
      >
        <Animated.View style={[styles.formCreate, rAnimateFormCreatePlaylist]}>
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
              small
            />
          </Box>
        </Animated.View>
        <Animated.View style={[styles.selectMusic, rAnimateSelectMusics]}>
          <SelectMusicsPlaylist
            selectedMusics={selectedMusics}
            toggleSelectMusic={handleToogleSelectMusic}
          />
        </Animated.View>
      </VStack>
    </KeyboardDismiss>
  </RNModal>
);

export default ModalCreatePlaylistView;

const styles = StyleSheet.create({
  modal: {
    marginVertical: 0,
    marginHorizontal: metrics.screenWidth5,
  },
  formCreate: {
    flex: 1,
    zIndex: 99,
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
    backgroundColor: '#262c2c',
  },
  keyboardAvoing: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  selectMusic: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});
