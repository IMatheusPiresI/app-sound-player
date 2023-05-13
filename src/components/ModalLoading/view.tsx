import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { HStack, Modal, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const ModalLoadingView: React.FC<IViewProps> = ({ message }) => (
  <Modal style={styles.modal} isOpen={true} animationPreset={undefined}>
    <VStack flex={1} alignItems={'center'} justifyContent={'center'}>
      <HStack
        background={'#464444'}
        w={'screenWidth80'}
        borderRadius={8}
        px="4"
        py="4"
        alignItems={'center'}
      >
        <ActivityIndicator size={32} color="#fff" />
        <Text color="white" ml="2" fontSize={16}>
          {message}
        </Text>
      </HStack>
    </VStack>
  </Modal>
);

export default ModalLoadingView;

const styles = StyleSheet.create({
  modal: {
    marginVertical: 0,
    marginHorizontal: 0,
  },
});
