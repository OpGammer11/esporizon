import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../utils/colors';
import MyText from '../components/MyText';
import {kFormatter} from '../utils/number';
import {SharedElement} from 'react-navigation-shared-element';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';
import {Image} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function Balance({navigation}) {
  return (
    <View
      style={{
        width: width,
        height: height,
        marginTop: 'auto',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
      }}>
      <View style={styles.main}>
        <MyText
          style={{
            fontSize: 30,
            color: colors.text,
          }}>
          Balance
        </MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: width,
    height: height - 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,

    //shadow
    elevation: 30,
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});
