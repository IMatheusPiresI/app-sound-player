import React from 'react';
import { TouchableOpacity } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Box, Input, VStack } from 'native-base';

import { IViewProps } from './types';

const InputSearchView: React.FC<IViewProps> = ({
  inputRef,
  handleFocus,
  ...rest
}) => (
  <VStack flex={1} justifyContent="center">
    <Input
      {...rest}
      w="full"
      backgroundColor={'#1e1d1d'}
      borderWidth={1}
      borderColor="white"
      borderRadius={8}
      fontSize="18"
      h="10"
      focusOutlineColor={'white'}
      color={'white'}
      pl="12"
      ref={inputRef}
    />

    <Box position={'absolute'} left="4">
      <TouchableOpacity activeOpacity={0.7} onPress={handleFocus}>
        <MaterialIcons name={'search'} size={22} color="white" />
      </TouchableOpacity>
    </Box>
  </VStack>
);

export default InputSearchView;
