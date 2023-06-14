import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MyText from '../components/MyText';
import LoginPageSetup from '../components/LoginPagesetup';
import {MotiView, AnimatePresence, useAnimationState} from 'moti';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../utils/colors';

const {width, height} = Dimensions.get('window');
export default function Login() {
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [number, setNumber] = useState('');
  const [isLoging, setIsLoging] = useState(true);
  const [exited, setExited] = useState(false);
  const [okForOtp, setOkForOtp] = useState(false);

  useEffect(() => {
    console.log('number', number);
  }, [number]);

  useEffect(() => {
    if (number.length === 10) {
      setOkForOtp(true);
    } else {
      setOkForOtp(false);
    }
  }, [number]);

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

  function changeExisted() {
    setTimeout(() => {
      if (isLoging) {
        setExited(false);
      } else {
        setExited(true);
      }
    }, 100);
  }

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
                isLoging ? {color: 'white', fontSize: 21} : {color: 'grey'},
              ]}>
              I Am A Old User
            </MyText>
          </TouchableOpacity>
          <MyText
            style={{
              fontSize: 20,
              color: 'white',
              marginHorizontal: 5,
            }}>
            /
          </MyText>
          <TouchableOpacity
            onPress={() => {
              setIsLoging(false);
            }}>
            <MyText
              style={[
                styles.topLineTxt,
                isLoging ? {color: 'grey'} : {color: 'white', fontSize: 21},
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
                duration: 200,
              }}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                borderRadius: 20,
                marginTop: 25,
              }}>
              <View style={styles.phoneInputContainer}>
                <MyText
                  style={{
                    fontSize: 15,
                    color: 'black',
                  }}>
                  +91
                </MyText>
                <TextInput
                  onChangeText={text => {
                    const newText = text.replace(/[^0-9]/g, '');
                    setNumber(newText);
                  }}
                  value={number}
                  style={styles.txtInput}
                  placeholder="Phone Number"
                  placeholderTextColor={'grey'}
                  autoFocus={true}
                  inputMode="numeric"
                  maxLength={10}
                  cursorColor={'black'}
                />
              </View>
              {okForOtp ? (
                <TouchableOpacity
                  style={[styles.sendOtpBtn, {backgroundColor: colors.primary}]}
                  onPress={() => {
                    signInWithPhoneNumber(`+91${number}`);
                  }}>
                  <MyText
                    style={{
                      fontSize: 15,
                      color: 'black',
                    }}>
                    <Icon name="arrowright" size={24} color="white" />
                  </MyText>
                </TouchableOpacity>
              ) : (
                <View
                  style={[
                    styles.sendOtpBtn,
                    {backgroundColor: 'grey', opacity: 0.1},
                  ]}>
                  <Icon name="arrowright" size={30} color="white" />
                </View>
              )}
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
                duration: 200,
              }}
              style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 10,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Register</Text>
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
    alignItems: 'center',
  },
  topLineTxt: {
    fontSize: 20,
  },
  phoneInputContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInput: {
    flex: 1,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 5,
    fontSize: 16,
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
  sendOtpBtn: {
    width: '20%',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 0,
  },
});
