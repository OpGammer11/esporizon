import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {colors} from '../utils/colors';
import MyText from '../components/MyText';

export default function Team({navigation}) {
  const route = useRoute();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Balance');
        }}>
        <MyText
          style={{
            fontSize: 30,
            color: colors.text,
          }}>
          Team
        </MyText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
