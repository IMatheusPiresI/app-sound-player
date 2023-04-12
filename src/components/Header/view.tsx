import React from 'react';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { Box, HStack, Text, VStack } from 'native-base';
const HeaderView: React.FC = () => (
  <VStack pt="statusBarHeight">
    <HStack px="12" py="4" justifyContent={'space-between'}>
      <Box>
        <MaterialIcons name="notifications" size={20} color="#fff8" />
      </Box>
      <HStack>
        <Text color={'#fff8'} mr="2">
          Podcasts
        </Text>
        <FontAwesome5 name="microphone-alt" size={20} color="#fff8" />
      </HStack>
      <Box>
        <MaterialIcons name="search" size={20} color="#fff8" />
      </Box>
    </HStack>
  </VStack>
);
export default HeaderView;
