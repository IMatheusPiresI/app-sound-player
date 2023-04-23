import React from 'react';
import { TouchableOpacity } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Box, HStack, Text, VStack } from 'native-base';

import { IViewProps } from './types';
const HeaderView: React.FC<IViewProps> = ({
  iconLeft,
  iconMid,
  iconRight,
  textMid,
  handleIconLeftPress,
  handleIconRightPress,
}) => (
  <VStack pt="6">
    <HStack px="12" py="4">
      <HStack w="full" alignItems={'center'} justifyContent="center">
        <Box position={'absolute'} left={0}>
          <TouchableOpacity onPress={handleIconLeftPress}>
            <MaterialIcons name={iconLeft} size={24} color="#fff8" />
          </TouchableOpacity>
        </Box>
        <HStack justifyContent={'center'} alignItems="center">
          <Text color={'#fff8'} mr="2" fontSize={'16'}>
            {textMid}
          </Text>
          <MaterialIcons name={iconMid} size={24} color="#fff8" />
        </HStack>
        <Box position={'absolute'} right={0}>
          <TouchableOpacity onPress={handleIconRightPress}>
            <MaterialIcons name={iconRight} size={24} color="#fff8" />
          </TouchableOpacity>
        </Box>
      </HStack>
    </HStack>
  </VStack>
);
export default HeaderView;
