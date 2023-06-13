import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyText from '../components/MyText';
import LoginPageSetup from '../components/LoginPagesetup';
import {MotiView, AnimatePresence, useAnimationState} from 'moti';
import auth from '@react-native-firebase/auth';

const {width, height} = Dimensions.get('window');
export default function Login() {
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [number, setNumber] = useState('');
  const [isLoging, setIsLoging] = useState(true);
  const [exited, setExited] = useState(false);

  function changeExisted() {
    setTimeout(() => {
      if (isLoging) {
        setExited(false);
      } else {
        setExited(true);
      }
    }, 500);
    console.log('exited', exited);
  }

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  return (
    <>
      <LoginPageSetup>
        <View style={styles.topLine}>
          <TouchableOpacity
            onPress={() => {
              setIsLoging(true);
            }}>
            <MyText
              style={[
                styles.topLineTxt,
                isLoging ? {color: 'white', fontSize: 16} : {color: 'grey'},
              ]}>
              I Am A Old User
            </MyText>
          </TouchableOpacity>
          <Text> / </Text>
          <TouchableOpacity
            onPress={() => {
              setIsLoging(false);
            }}>
            <MyText
              style={[
                styles.topLineTxt,
                isLoging ? {color: 'grey'} : {color: 'white', fontSize: 16},
              ]}>
              Create New
            </MyText>
          </TouchableOpacity>
        </View>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            setExited(true);
            changeExisted();
          }}>
          {isLoging ? (
            <MotiView
              key={'login'}
              from={{
                opacity: 0,
                translateX: -100,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              exit={{
                opacity: 0,
                translateX: -100,
              }}
              transition={{
                type: 'timing',
                duration: 200,
              }}
              exitTransition={{
                type: 'timing',
                duration: 100,
              }}
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 20,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>Login</Text>
            </MotiView>
          ) : exited ? (
            <MotiView
              key={'register'}
              from={{
                opacity: 0,
                translateX: 100,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
              transition={{
                type: 'timing',
                duration: 200,
              }}
              exit={{
                opacity: 0,
                translateX: 100,
              }}
              exitTransition={{
                type: 'timing',
                duration: 100,
              }}
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 10,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>Register</Text>
            </MotiView>
          ) : null}
        </AnimatePresence>
      </LoginPageSetup>
    </>
  );
}

const styles = StyleSheet.create({
  topLine: {
    flexDirection: 'row',
  },
  topLineTxt: {
    fontSize: 15,
  },
});
