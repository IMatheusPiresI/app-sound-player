import React from 'react';
import { StyleSheet } from 'react-native';

import { Slider } from '@miblanchard/react-native-slider';
import { formatToTimeString } from '@resources/utils/formatToTimeString';

import { Box, HStack, Text } from 'native-base';

import { IViewProps } from './types';

const SliderView: React.FC<IViewProps> = ({
  progress,
  onSlideComplete,
  ...rest
}) => (
  <Box>
    <Slider
      {...rest}
      minimumTrackTintColor="#00fffb"
      maximumTrackTintColor="#484848"
      value={progress.position}
      maximumValue={progress.duration}
      trackStyle={styles.track}
      onSlidingComplete={onSlideComplete}
      renderThumbComponent={() => (
        <Box
          w="4"
          h="4"
          backgroundColor={'#00fffb'}
          borderRadius="full"
          alignItems="center"
          justifyContent="center"
        >
          <Box w="2" h="2" borderRadius="full" backgroundColor="#000" />
        </Box>
      )}
    />
    <HStack justifyContent={'space-between'}>
      <Text color="#fff">{formatToTimeString(progress.position)}</Text>
      <Text color="#fff">
        {formatToTimeString(progress.duration - progress.position)}
      </Text>
    </HStack>
  </Box>
);

export default SliderView;

const styles = StyleSheet.create({
  track: {
    height: 3,
  },
});
