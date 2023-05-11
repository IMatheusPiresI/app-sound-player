import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@components/Header';
import { InputSearch } from '@components/Form/InputSearch';
import metrics from '@resources/theme/metrics';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ModalCreatePlaylist } from '@components/ModalCreatePlaylist';

import { Box, VStack } from 'native-base';

import { IViewProps } from './types';
import { CardPlaylist } from './CardPlaylist';

const PlaylistsView: React.FC<IViewProps> = ({
  rAnimatedHideSearch,
  rAnimatedNewPlaylist,
  showModalCreatePlaylist,
  playlists,
  handleShowModalCreatePlaylist,
  handleCloseModalCreatePlaylist,
  scrollHandler,
}) => (
  <KeyboardDismiss>
    <>
      <LinearGradient
        colors={['#262c2c', '#171414', '#262c2c']}
        style={styles.container}
      >
        <VStack flex={1} pt="statusBarHeight">
          <Header textMid="Playlists" iconMid="album" />
          <Box zIndex={99}>
            <Box w="full">
              <Box
                w="full"
                px="screenWidth5"
                mt="0"
                mb="4"
                position={'absolute'}
                flexDir={'row'}
              >
                <Animated.View
                  style={[[rAnimatedHideSearch, styles.container]]}
                >
                  <InputSearch />
                </Animated.View>
                <Animated.View style={rAnimatedNewPlaylist}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={handleShowModalCreatePlaylist}
                  >
                    <Box
                      w="14"
                      h="10"
                      ml="4"
                      borderRadius={6}
                      borderWidth={1}
                      borderColor={'white'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      bgColor={'#fff3'}
                    >
                      <MaterialIcons name="add" size={24} color="#fff" />
                    </Box>
                  </TouchableOpacity>
                </Animated.View>
              </Box>
            </Box>
          </Box>
          <Animated.FlatList
            data={playlists}
            onScroll={scrollHandler}
            keyExtractor={(item) => item.id}
            columnWrapperStyle={styles.columnWrapper}
            numColumns={2}
            contentContainerStyle={styles.contentContainerList}
            renderItem={({ item }) => <CardPlaylist playlist={item} />}
            overScrollMode={'never'}
            bounces={false}
          />
        </VStack>
        <ModalCreatePlaylist
          isVisible={showModalCreatePlaylist}
          handleClose={handleCloseModalCreatePlaylist}
        />
      </LinearGradient>
    </>
  </KeyboardDismiss>
);

export default PlaylistsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainerList: {
    gap: 10,
    paddingTop: 60,
    paddingHorizontal: metrics.screenWidth5,
    paddingBottom: metrics.tabBarHeight + 20,
    flexGrow: 1,
  },

  searchFront: {},
});
