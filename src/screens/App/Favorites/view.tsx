import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@components/Header';
import { InputSearch } from '@components/Form/InputSearch';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { Button } from '@components/Button';
import { CardMusicList } from '@components/CardMusicList';

import { Box, FlatList, VStack } from 'native-base';

import { IViewProps } from './types';

const FavoritesView: React.FC<IViewProps> = ({ favoriteMusics }) => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <KeyboardDismiss>
      <VStack flex={1} pt="statusBarHeight">
        <VStack h={'screenHeight45'} w="full">
          <Header textMid="Favorites" iconMid={'favorite'} />
          <Box px={4}>
            <InputSearch />
          </Box>
          <VStack
            flex={1}
            background="transparent"
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Box w={'screenWidth'} pt="4">
              <ImageBackground
                source={{
                  uri: 'https://i.ytimg.com/vi/tAyYYKcySXA/maxresdefault.jpg',
                }}
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
          </VStack>
        </VStack>
        <VStack w={'full'} flex={1}>
          <FlatList
            data={favoriteMusics}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardMusicList music={item} />}
            contentContainerStyle={styles.list}
          />
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
});
