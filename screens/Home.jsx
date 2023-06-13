import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {FlipInEasyX} from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';

export default function Home({navigation}) {
  const {width, height} = Dimensions.get('window');

  const image = require('../assets/espologoglow.png');
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: 'black',
        }}></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  otherShape: {
    width: 200,
    height: 100,
    backgroundColor: 'transparent',
    borderRightWidth: 100,
    borderTopWidth: 100,
    borderStyle: 'solid',
    borderRightColor: 'white',
  },
});
