import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@components/Header';
import { InputSearch } from '@components/Form/InputSearch';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { Button } from '@components/Button';
import { CardMusicList } from '@components/CardMusicList';

import { Box, VStack } from 'native-base';

import { IViewProps } from './types';

const FavoritesView: React.FC<IViewProps> = ({
  favoriteMusics,
  rAnimatedImageBanner,
  rAnimatedSearchBox,
  scrollHandler,
}) => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <KeyboardDismiss>
      <VStack flex={1} pt="statusBarHeight">
        <Header textMid="Favorites" iconMid={'favorite'} />
        <VStack w={'full'} flex={1}>
          <VStack flex={1}>
            <Box px={4}>
              <Animated.View style={[rAnimatedSearchBox]}>
                <InputSearch />
              </Animated.View>
            </Box>
            <Animated.FlatList
              data={favoriteMusics}
              onScroll={scrollHandler}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CardMusicList music={item} />}
              contentContainerStyle={styles.list}
              scrollEventThrottle={16}
              ListHeaderComponent={() => (
                <TouchableOpacity activeOpacity={1}>
                  <Animated.View style={rAnimatedImageBanner}>
                    <Box w={'screenWidth'} mt="4" flex={1}>
                      <ImageBackground
                        source={{
                          uri: 'https://i.ytimg.com/vi/tAyYYKcySXA/maxresdefault.jpg',
                        }}
                        resizeMode="cover"
                        style={styles.imageBackground}
                      >
                        <LinearGradient
                          style={[styles.container, styles.flexCenter]}
                          colors={[
                            'transparent',
                            'transparent',
                            'transparent',
                            '#0008',
                            '#171717',
                          ]}
                        >
                          <Box position={'absolute'}>
                            <Button title="Ouvir agora" variant="black80" />
                          </Box>
                        </LinearGradient>
                      </ImageBackground>
                    </Box>
                  </Animated.View>
                </TouchableOpacity>
              )}
            />
          </VStack>
        </VStack>
      </VStack>
    </KeyboardDismiss>
  </LinearGradient>
);

export default FavoritesView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  list: {
    paddingBottom: 20,
  },
  hidden: {
    overflow: 'hidden',
  },
});
