import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Box, HStack, Image, Text } from 'native-base';

import { IViewProps } from './types';

const CardMusicSelectView: React.FC<IViewProps> = ({
  rAnimatedCheckBox,
  music,
  rAnimatedBorder,
  ...rest
}) => (
  <TouchableOpacity activeOpacity={0.7} {...rest}>
    <Animated.View style={rAnimatedBorder}>
      <HStack borderRadius={8} px="4" py="1">
        <Image
          source={{
            uri: music.imageBanner,
          }}
          w="9"
          h="9"
          alt="image music"
        />
        <Box ml="2" flex={1}>
          <Text color={'white'} fontSize={12} numberOfLines={1}>
            {music.musicName}
          </Text>
          <Text color={'#fff6'} fontSize={10} numberOfLines={1}>
            {music.creator}
          </Text>
        </Box>
        <Box alignItems={'center'} justifyContent={'center'}>
          <Box
            w="5"
            h="5"
            bgColor={'transparent'}
            borderRadius={'full'}
            borderWidth={1}
            borderColor={'#fff6'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Animated.View style={rAnimatedCheckBox}>
              <Box
                w="3"
                h="3"
                borderRadius={'full'}
                backgroundColor={'green.400'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <MaterialIcons name="check" size={12} color={'#000000'} />
              </Box>
            </Animated.View>
          </Box>
        </Box>
      </HStack>
    </Animated.View>
  </TouchableOpacity>
);

export default CardMusicSelectView;
