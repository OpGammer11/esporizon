import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

export default function Loader({loading}) {
  if (!loading) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}>
      <AnimatedLottieView
        source={require('../assets/loader.json')}
        autoPlay
        loop
        style={{width: 300, height: 300}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
