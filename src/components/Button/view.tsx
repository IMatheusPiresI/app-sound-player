import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Text } from 'native-base';

import { IViewProps } from './types';
const ButtonView: React.FC<IViewProps> = ({
  title,
  isLoading,
  disabled,
  variant,
  small,
  ...rest
}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    style={[
      styles.button,
      small && styles.buttonSmall,
      variant === 'black80' && styles.variantBlack80,
      disabled && styles.buttonDisabled,
    ]}
    {...rest}
  >
    {isLoading ? (
      <ActivityIndicator size={24} color="#fff" />
    ) : (
      <Text
        color={disabled ? '#fff6' : 'white'}
        fontSize={small ? '16' : '18'}
        fontWeight={'bold'}
      >
        {title}
      </Text>
    )}
  </TouchableOpacity>
);

export default ButtonView;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 20,
    borderRadius: 10,
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSmall: {
    height: 40,
  },
  variantBlack80: {
    backgroundColor: '#0008',
  },
  buttonDisabled: {
    borderColor: '#fff6',
  },
});
