import React from 'react';
import { TouchableOpacity } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
    <HStack px="12" py="4" justifyContent={'space-between'}>
      <Box>
        <TouchableOpacity onPress={handleIconLeftPress}>
          <MaterialIcons name={iconLeft} size={24} color="#fff8" />
        </TouchableOpacity>
      </Box>
      <HStack justifyContent={'center'} alignItems="center">
        <Text color={'#fff8'} mr="2" fontSize={'16'}>
          {textMid}
        </Text>
        <FontAwesome5 name={iconMid} size={24} color="#fff8" />
      </HStack>
      <Box>
        <TouchableOpacity onPress={handleIconRightPress}>
          <MaterialIcons name={iconRight} size={24} color="#fff8" />
        </TouchableOpacity>
      </Box>
    </HStack>
  </VStack>
);
export default HeaderView;
