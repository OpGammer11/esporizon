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
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {Text} from 'moti';

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
              colors={['black', 'black', 'transparent']}
              style={{flex: 1, justifyContent: 'flex-end'}}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 0, y: 0}}
                colors={['black', 'black', 'black', 'transparent']}
                style={styles.mainContainer}>
                <Text
                  style={{
                    fontSize: 40,
                    color: 'white',
                    marginBottom: 50,
                    fontFamily: 'Ubuntu-Bold',
                  }}>
                  Get Started
                </Text>
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
    backgroundColor: 'black',
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
    top: 40,
    right: 20,
    width: 50,
    height: 50,
    zIndex: 1,
  },
});
