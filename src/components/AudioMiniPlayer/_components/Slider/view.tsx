import React from 'react';
import { StyleSheet } from 'react-native';

import { Slider } from '@miblanchard/react-native-slider';

import { Box } from 'native-base';

import { IViewProps } from './types';

const SliderView: React.FC<IViewProps> = ({
  progress,
  onSlideComplete,
  ...rest
}) => (
  <Box>
    <Slider
      {...rest}
      minimumTrackTintColor="#fff"
      maximumTrackTintColor="#484848"
      value={progress.position}
      maximumValue={progress.duration}
      trackStyle={styles.track}
      thumbStyle={styles.thumb}
      onSlidingComplete={onSlideComplete}
      disabled
    />
  </Box>
);

export default SliderView;

const styles = StyleSheet.create({
  track: {
    height: 1.5,
  },
  thumb: {
    width: 0,
    height: 0,
  },
});
