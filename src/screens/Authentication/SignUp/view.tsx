import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import SongPhonePNG from '@assets/images/song-phone.png';
import { InputForm } from '@components/Form/InputForm';
import { KeyboardDismiss } from '@components/Form/KeyboardDismiss';
import { Button } from '@components/Button';

import { Box, Image, Text, VStack } from 'native-base';

import { IViewProps } from './types';

const SignUpView: React.FC<IViewProps> = ({
  formik,
  loading,
  handleGoToSignIn,
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
                alt="Sign up image"
                w={'screenWidth'}
                h="screenHeight30"
                resizeMode="contain"
              />
            </Box>
            <Text color={'#fff'} fontSize={30} fontWeight="bold" mt="4">
              Sign Up
            </Text>

            <VStack space={6} px="8" mt="6">
              <InputForm
                label="E-mail"
                value={formik.values.email}
                onChangeText={formik.handleChange('email')}
              />
              <InputForm
                label="Password"
                value={formik.values.password}
                secret
                onChangeText={formik.handleChange('password')}
              />
              <InputForm
                label="Confirm password"
                secret
                value={formik.values.confirmPassword}
                onChangeText={formik.handleChange('confirmPassword')}
              />
            </VStack>
            <Text color="white" fontSize={12} textAlign="right" mt="3">
              Already have an account?
              <TouchableOpacity activeOpacity={0.7} onPress={handleGoToSignIn}>
                <Text color="blue.300" fontSize={12} ml="1">
                  Access account!
                </Text>
              </TouchableOpacity>
            </Text>
          </VStack>
          <Box flex={1} justifyContent="flex-end" mt="8" px="8">
            <Box mb="2">
              <Box h="16">
                <Button
                  title="Register"
                  onPress={() => formik.handleSubmit()}
                  isLoading={loading}
                  disabled={loading || !formik.isValid}
                />
              </Box>
            </Box>
          </Box>
        </VStack>
      </KeyboardDismiss>
    </KeyboardAvoidingView>
  </LinearGradient>
);

export default SignUpView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
