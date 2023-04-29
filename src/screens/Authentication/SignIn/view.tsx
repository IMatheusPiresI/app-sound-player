import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import SongPhonePNG from '@assets/images/song-phone.png';
import { InputForm } from '@components/Form/InputForm';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { Button } from '@components/Button';

import { Box, Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const SignInView: React.FC<IViewProps> = ({
  formik,
  loading,
  handleGoToCreateAccount,
  handleLogin,
}) => (
  <LinearGradient
    colors={['#262c2c', '#171414', '#262c2c']}
    style={styles.container}
  >
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <KeyboardDismiss>
        <VStack flex={1} pb="bottomSpace" justifyContent={'flex-end'}>
          <VStack alignItems="center">
            <Box w={'full'} alignItems="center" mt="16">
              <Image
                source={SongPhonePNG}
                alt="Sign in image"
                w={'screenWidth'}
                h="screenHeight30"
                resizeMode="contain"
              />
            </Box>
            <Text color={'#fff'} fontSize={30} fontWeight="bold" mt="4">
              Sign In
            </Text>

            <VStack space={6} px="8" mt="6">
              <InputForm
                label="E-mail"
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
              />
              <InputForm
                label="Password"
                secret
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
              />
              <Text color="white" fontSize={12} textAlign="right">
                Don&rsquo;t have an account?{' '}
                <Text
                  color="blue.300"
                  fontSize={12}
                  ml="1"
                  onPress={handleGoToCreateAccount}
                >
                  Create an account!
                </Text>
              </Text>
            </VStack>
          </VStack>
          <Box flex={1} justifyContent="flex-end" mt="8" px="8">
            <Box mb="2">
              <Box h="16">
                <Button
                  title="Login"
                  onPress={handleLogin}
                  disabled={!formik.isValid}
                  isLoading={loading}
                />
              </Box>
            </Box>
          </Box>
        </VStack>
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  </LinearGradient>
);

export default SignInView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textButton: {
    justifyContent: 'center',
    alignSelf: 'baseline',
  },
});
