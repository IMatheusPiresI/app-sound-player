import React from 'react';

import { Text, VStack } from 'native-base';

import { IViewProps } from './types';

const FormCreatePlaylistView: React.FC<IViewProps> = ({}) => (
  <VStack>
    <Text
      color="white"
      fontSize={16}
      fontWeight={'medium'}
      textAlign={'center'}
    >
      Create PlayList
    </Text>
  </VStack>
);

export default FormCreatePlaylistView;
