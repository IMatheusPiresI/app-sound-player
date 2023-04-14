import React from 'react';
import { TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import { Box } from 'native-base';

import { IViewProps } from './types';

const ButtonSelectView: React.FC<IViewProps> = ({
  title,
  rAnimatedText,
  rAnimatedView,
  handleSelectOption,
}) => (
  <Box alignItems={'center'} justifyContent={'center'} flex={1}>
    <Animated.View style={[rAnimatedView]}>
      <TouchableOpacity onPress={handleSelectOption}>
        <Animated.Text style={rAnimatedText}>{title}</Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  </Box>
);
export default ButtonSelectView;
