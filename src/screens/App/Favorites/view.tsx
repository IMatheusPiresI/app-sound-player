import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { LinearGradient } from 'expo-linear-gradient';
import { Header } from '@components/Header';
import { InputSearch } from '@components/Form/InputSearch';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { CardMusicListFavorite } from '@components/CardMusicListFavorite';
import metrics from '@resources/theme/metrics';

import { Box, VStack } from 'native-base';

import { IViewProps } from './types';
import { BannerFavoriteMusic } from './_components/BannerFavoriteMusic';
import { EmptyFavorite } from './_components/EmptyFavorites';

const FavoritesView: React.FC<IViewProps> = ({
  favoriteMusics,
  rAnimatedSearchBox,
  scrollAnimate,
  search,
  userFavorites,
  scrollHandler,
  setSearch,
}) => {
  const renderEmptyListFavoriteSearch = () => (
    <EmptyFavorite title={`Nenhuma música com "${search}" \nencontrada!`} />
  );

  const renderEmptyList = () => (
    <EmptyFavorite
      title={`Adicione músicas aos favoritos\npara reproduzir apenas as melhores!`}
    />
  );

  return (
    <LinearGradient
      colors={['#262c2c', '#171414', '#262c2c']}
      style={styles.container}
    >
      <KeyboardDismiss>
        <VStack flex={1} pt="statusBarHeight">
          <Header textMid="Favorites" iconMid={'favorite'} />
          <VStack zIndex={99}>
            {userFavorites.length >= 1 && (
              <VStack position={'absolute'} w="full">
                <Animated.View style={rAnimatedSearchBox}>
                  <Box px={4} w="full" mb="2">
                    <InputSearch
                      value={search}
                      onChangeText={setSearch}
                      maxLength={20}
                    />
                  </Box>
                </Animated.View>
                <BannerFavoriteMusic scrollAnimate={scrollAnimate} />
              </VStack>
            )}
          </VStack>
          {userFavorites.length <= 0 ? (
            renderEmptyList()
          ) : (
            <>
              <VStack flex={1}>
                <Animated.FlatList
                  data={favoriteMusics}
                  onScroll={scrollHandler}
                  bounces={false}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <CardMusicListFavorite music={item} />
                  )}
                  scrollEventThrottle={16}
                  contentContainerStyle={styles.containerScroll}
                  ListEmptyComponent={renderEmptyListFavoriteSearch}
                />
              </VStack>
            </>
          )}
        </VStack>
      </KeyboardDismiss>
    </LinearGradient>
  );
};

export default FavoritesView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerScroll: {
    paddingTop: metrics.screenHeight25 + 50,
    paddingBottom: metrics.tabBarHeight + 20,
  },
});
