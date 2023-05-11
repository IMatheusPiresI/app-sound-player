import React from 'react';
import RNModal from 'react-native-modal';
import { StyleSheet } from 'react-native';

import { Button } from '@components/Button';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import metrics from '@resources/theme/metrics';
import { SelectMusicsPlaylist } from '@components/ModalCreatePlaylist/_components/SelectMusicsPlaylist';

import { Box, VStack } from 'native-base';

import { IViewProps } from './types';

const ModalAddMusicsPlaylistView: React.FC<IViewProps> = ({
  isVisible,
  selectedMusics,
  musicsWithoutPlaylist,
  loading,
  handleAddMusicsPlaylist,
  handleToogleSelectMusic,
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
        px="4"
        py="4"
      >
        <SelectMusicsPlaylist
          selectedMusics={selectedMusics}
          toggleSelectMusic={handleToogleSelectMusic}
          customMusics={musicsWithoutPlaylist}
        />
        <Box>
          <Button
            title="Add"
            disabled={selectedMusics.length === 0 || loading}
            isLoading={loading}
            onPress={handleAddMusicsPlaylist}
            small
          />
        </Box>
      </VStack>
    </KeyboardDismiss>
  </RNModal>
);

export default ModalAddMusicsPlaylistView;

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
