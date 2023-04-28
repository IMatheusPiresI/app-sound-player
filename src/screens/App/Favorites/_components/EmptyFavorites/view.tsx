import React from 'react';

import HeadsetHeartBeatPNG from '@assets/images/headsetheartbeat.png';

import { Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const EmptyFavoriteView: React.FC<IViewProps> = ({ title }) => (
  <VStack flex={1} alignItems="center" justifyContent={'center'}>
    <Image
      source={HeadsetHeartBeatPNG}
      alt="empty list"
      w={'full'}
      h={'56'}
      resizeMode="contain"
    />

    <Text
      color={'white'}
      fontWeight="medium"
      fontSize={'14'}
      textAlign="center"
      maxW={'screenWidth80'}
    >
      {title}
    </Text>
  </VStack>
);

export default EmptyFavoriteView;
