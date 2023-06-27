import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../utils/colors';
import MyText from '../components/MyText';

export default function Balance() {
  return (
    <SafeAreaView style={styles.main}>
      <MyText
        style={{
          fontSize: 30,
          color: colors.text,
        }}>
        Balance
      </MyText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
});
