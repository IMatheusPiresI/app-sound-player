import React from 'react';
import Animated from 'react-native-reanimated';
import { StyleSheet, TouchableOpacity } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Box, Input, VStack } from 'native-base';

import { IViewProps } from './types';

const InputFormView: React.FC<IViewProps> = ({
  rAnimatedLabelContainer,
  rAnimatedLabel,
  inputRef,
  label,
  secret,
  showPassword,
  handleFocus,
  handleToogleShowPassword,
  onBlur,
  onFocus,
  ...rest
}) => (
  <VStack w="full" justifyContent="center">
    <Input
      {...rest}
      w="full"
      backgroundColor={'#171414'}
      borderWidth={1}
      borderColor="white"
      fontSize="18"
      h="14"
      focusOutlineColor={'white'}
      color={'white'}
      secureTextEntry={secret ? !showPassword : false}
      pr={secret ? '12' : '2'}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={inputRef}
    />
    <Animated.View style={rAnimatedLabelContainer}>
      <Animated.Text
        style={[rAnimatedLabel, styles.label]}
        onPress={handleFocus}
      >
        {label}
      </Animated.Text>
    </Animated.View>
    {secret && (
      <Box position={'absolute'} right="4">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleToogleShowPassword}
        >
          <MaterialIcons
            name={showPassword ? 'visibility-off' : 'visibility'}
            size={22}
            color="white"
          />
        </TouchableOpacity>
      </Box>
    )}
  </VStack>
);

export default InputFormView;

const styles = StyleSheet.create({
  label: {
    color: 'white',
  },
});
