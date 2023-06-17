/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Image, StatusBar, useColorScheme} from 'react-native';
import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Appnavigator from './Appnavigation';
import FastImage from 'react-native-fast-image';
import {RecoilRoot} from 'recoil';

export default function App() {
  useEffect(() => {
    const init = async () => {
      console.log('App is loading...');
    };
    init().finally(() => {
      RNBootSplash.hide({fade: true, duration: 250});
    });
  }, []);

  return (
    <>
      <RecoilRoot>
        <StatusBar
          barStyle={'light-content'}
          translucent={true}
          backgroundColor={'transparent'}
        />
        <SafeAreaProvider>
          <Appnavigator />
        </SafeAreaProvider>
      </RecoilRoot>
    </>
  );
}
