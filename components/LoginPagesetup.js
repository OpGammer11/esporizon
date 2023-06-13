import {Dimensions, StyleSheet, View, Image, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'moti';

const {width, height} = Dimensions.get('window');
export default function LoginPageSetup({children}) {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
          source={require('../assets/loginBg.png')}
        />
      </View>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'transparent',
        }}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={['#000000', '#000', '#00000000']}
          style={{flex: 1, justifyContent: 'flex-end'}}>
          <View style={styles.mainContainer}>
            <Text
              style={{
                fontSize: 40,
                color: 'white',
                marginBottom: 20,
                fontFamily: 'Ubuntu-Bold',
              }}>
              Get Started
            </Text>
            {children}
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    width: width,
    height: height,
    zIndex: -1,
    backgroundColor: 'black',
  },
  mainContainer: {
    backgroundColor: 'transparent',
    width: width,
    height: height / 1.8,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
