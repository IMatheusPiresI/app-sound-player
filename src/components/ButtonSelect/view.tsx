import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Box, Text } from 'native-base';

import { IViewProps } from './types';

const ButtonSelectView: React.FC<IViewProps> = ({
  title,
  handleSelectOption,
}) => (
  <TouchableOpacity onPress={handleSelectOption}>
    <Box>
      <Text color={'#fff7'} mr="2" fontWeight={'bold'} fontSize={18}>
        {title}
      </Text>
    </Box>
  </TouchableOpacity>
);
export default ButtonSelectView;
