import React from 'react';
import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Box, VStack } from 'native-base';

import { IViewProps } from './types';

const FavoritesView: React.FC<IViewProps> = () => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <VStack>
      <Box />
    </VStack>
  </LinearGradient>
);

export default FavoritesView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
