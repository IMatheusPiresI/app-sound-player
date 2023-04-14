import React from 'react';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { Box, HStack, Text, VStack } from 'native-base';
const HeaderView: React.FC = () => (
  <VStack pt="6">
    <HStack px="12" py="4" justifyContent={'space-between'}>
      <Box>
        <MaterialIcons name="notifications" size={24} color="#fff8" />
      </Box>
      <HStack justifyContent={'center'} alignItems="center">
        <Text color={'#fff8'} mr="2" fontSize={'16'}>
          Podcasts
        </Text>
        <FontAwesome5 name="microphone-alt" size={24} color="#fff8" />
      </HStack>
      <Box>
        <MaterialIcons name="search" size={24} color="#fff8" />
      </Box>
    </HStack>
  </VStack>
);
export default HeaderView;
