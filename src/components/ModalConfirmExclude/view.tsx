import React from 'react';
import RNModal from 'react-native-modal';
import { StyleSheet } from 'react-native';

import { Button } from '@components/Button';

import { Box, HStack, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const ModalConfirmExcludeView: React.FC<IViewProps> = ({
  isVisible,
  title,
  message,
  cancelButtonCallback,
  confirmButtonCallback,
}) => (
  <RNModal
    isVisible={isVisible}
    animationIn={'fadeIn'}
    animationInTiming={400}
    animationOut={'fadeOut'}
    animationOutTiming={400}
    onBackButtonPress={cancelButtonCallback}
    onBackdropPress={cancelButtonCallback}
    useNativeDriver
    useNativeDriverForBackdrop
    style={styles.modal}
  >
    <VStack
      background={'#464444'}
      w="screenWidth80"
      px="4"
      py="4"
      borderRadius={12}
    >
      <Box>
        <Text
          color="#fa7979"
          textAlign={'center'}
          fontWeight={'bold'}
          fontSize={16}
        >
          {title}
        </Text>
        <Text color="white" textAlign={'justify'} fontWeight={'medium'} mt="5">
          {message}
        </Text>
        <HStack mt="6" space={4}>
          <Box flex={1}>
            <Button small title="Cancel" onPress={cancelButtonCallback} />
          </Box>
          <Box flex={1}>
            <Button
              small
              title="Delete"
              variant="delete"
              onPress={confirmButtonCallback}
            />
          </Box>
        </HStack>
      </Box>
    </VStack>
  </RNModal>
);

export default ModalConfirmExcludeView;

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
