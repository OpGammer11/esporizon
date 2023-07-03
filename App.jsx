/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  ActivityIndicator,
  Image,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React, {Suspense, useEffect} from 'react';
import dynamiclinks from '@react-native-firebase/dynamic-links';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Appnavigator from './Appnavigation';
import {RecoilRoot} from 'recoil';
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from 'react-native-recoil-persist';
import {View} from 'moti';
import {colors} from './utils/colors';

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true, duration: 250});
  }, []);

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <Suspense
        fallback={
          <View
            style={{
              flex: 1,
              backgroundColor: colors.background,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator color={colors.primary} size={'large'} />
          </View>
        }>
        <RecoilRoot>
          <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
            <SafeAreaProvider>
              <Appnavigator />
            </SafeAreaProvider>
          </ReactNativeRecoilPersistGate>
        </RecoilRoot>
      </Suspense>
    </>
  );
}
