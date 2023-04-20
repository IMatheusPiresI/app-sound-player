import { TouchableOpacity } from 'react-native';
import { State } from 'react-native-track-player';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Box, HStack, Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';
import { Slider } from './_components/Slider';

const AudioMiniPlayerView: React.FC<IViewProps> = ({
  trackState,
  currentSong,
  handleNaviteToMusic,
  handleTogglePlaySong,
  handleCloseMiniPlayerAndStopMusic,
}) => {
  const renderIconPlayOrPause = () => {
    if (trackState === State.Playing) {
      return <MaterialIcons name="pause" size={40} color="#fff" />;
    }

    return <MaterialIcons name="play-arrow" size={40} color="#fff" />;
  };
  const renderAudioMiniPlayer = () => {
    if (trackState === State.None || !currentSong?.id) return null;

    return (
      <Box w="full" alignItems="center" px="2">
        <TouchableOpacity activeOpacity={0.8} onPress={handleNaviteToMusic}>
          <HStack
            w={'full'}
            h="16"
            bgColor={'#fff1'}
            borderRadius="6"
            px="4"
            alignItems="center"
          >
            <Image
              source={{
                uri: currentSong?.imageBanner,
              }}
              w="12"
              h="12"
              alt="current music"
            />
            <VStack flex={1} ml="4" pr="2">
              <Text
                color="#fff"
                fontSize={13}
                fontWeight="bold"
                numberOfLines={1}
              >
                {currentSong?.musicName}
              </Text>
              <Text
                color="#fff7"
                fontSize={14}
                fontWeight="bold"
                numberOfLines={1}
              >
                {currentSong?.creator}
              </Text>
            </VStack>
            <HStack alignItems={'center'}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={handleTogglePlaySong}
              >
                {renderIconPlayOrPause()}
              </TouchableOpacity>
              <Box ml="4">
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={handleCloseMiniPlayerAndStopMusic}
                >
                  <MaterialIcons name="close" size={24} color="#fff8" />
                </TouchableOpacity>
              </Box>
            </HStack>
          </HStack>
          <Box zIndex={99} w="full" position="absolute" bottom={-18}>
            <Slider />
          </Box>
        </TouchableOpacity>
      </Box>
    );
  };

  return renderAudioMiniPlayer();
};
export default AudioMiniPlayerView;
