import React from 'react';
import { Keyboard, StyleSheet, TouchableWithoutFeedback } from 'react-native';

type IProps = {
  children: React.ReactNode;
};
export const KeyboardDismiss: React.FC<IProps> = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    touchSoundDisabled
    style={styles.container}
  >
    {children}
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
