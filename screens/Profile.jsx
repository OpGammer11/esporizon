import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {colors} from '../utils/colors';
import MyText from '../components/MyText';

const {width, height} = Dimensions.get('window');

export default function Profile({navigation}) {
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
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
          Profile
        </MyText>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
