import {
  Dimensions,
  StyleSheet,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React from 'react';
import MyText from './MyText';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'moti';
import {colors} from '../utils/colors';

const {width, height} = Dimensions.get('window');
export default function LoginPageSetup({children}) {
  return (
    <>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
            }}
            source={require('../assets/loginBgSimple.png')}
          />
        </View>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'transparent',
          }}>
          <View style={styles.logo} pointerEvents="none">
            <Image
              resizeMode="contain"
              source={require('../assets/espologoglow.png')}
              style={{width: '100%', height: '100%'}}
            />
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              colors={[colors.background, colors.background, 'transparent']}
              style={{flex: 1, justifyContent: 'flex-end'}}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                colors={[
                  colors.background,
                  colors.background,
                  colors.background,
                  'transparent',
                ]}
                style={styles.mainContainer}>
                <MyText
                  style={{
                    fontSize: 60,
                    color: 'white',
                    marginBottom: 40,
                  }}>
                  {`GET\nSTARTED`}
                </MyText>
                {children}
              </LinearGradient>
            </LinearGradient>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    width: width,
    height: height,
    zIndex: -1,
    backgroundColor: colors.background,
  },
  mainContainer: {
    backgroundColor: 'transparent',
    width: width,
    height: height / 1.8,
    paddingHorizontal: 20,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  logo: {
    position: 'absolute',
    top: -20,
    right: -30,
    width: 150,
    height: 150,
    // backgroundColor: 'red',
    zIndex: 1,
  },
});
