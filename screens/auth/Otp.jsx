import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyText from '../../components/MyText';
import OTPTextInput from 'react-native-otp-textinput';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import {colors} from '../../utils/colors';
import {useRecoilState} from 'recoil';
import {FAuthConfirm} from '../../providers/recoilStore';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const {width, height} = Dimensions.get('window');

export default function Otp({navigation, route}) {
  const {mob, userName} = route.params;
  console.log(userName, mob);

  const otpInput = useRef(null);
  const [confirm, setConfirm] = useRecoilState(FAuthConfirm);
  const [otp, setOtp] = useState('');

  useEffect(() => {
    if (confirm != null) {
      console.log('confirm', confirm);
    } else {
      navigation.navigate('Login');
    }
  }, [confirm, otp]);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        console.log('User is authenticated!');
        onAuthStateChanged(user);
      } else {
        console.log('User is not authenticated!');
      }
    });
    return unsubscribe;
  }, []);

  function onAuthStateChanged(user) {
    if (userName && userName.length > 0) {
      const userRef = firestore().collection('user').doc(user.uid);
      userRef.set({
        username: userName,
        mob: mob,
        uid: user.uid,
      });
    } else {
      console.log('user already exists');
    }
  }

  const handleChange = code => {
    setOtp(code);
  };
  const confirmCode = async () => {
    try {
      await confirm.confirm(otp);
      console.log('success');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
      }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
          <View
            style={{
              // position: 'absolute',
              // top: 10,
              // left: 10,
              marginTop: 10,
              marginLeft: -15,
              width: 50,
              height: 50,
              backgroundColor: 'transparent',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FIcon name="arrow-left" size={30} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              // backgroundColor: 'grey',
              marginTop: 20,
              marginBottom: 40,
            }}>
            <MyText
              josefin
              style={{
                fontSize: 60,
                color: 'white',
                // marginBottom: 10,
              }}>
              {`ENTER\nOTP`}
            </MyText>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <MyText style={{fontSize: 20, color: 'grey'}}>
                Otp sent to{' '}
              </MyText>
              <MyText style={{fontSize: 20, color: 'white'}}>{mob} </MyText>
            </View>
          </View>

          <OTPTextInput
            containerStyle={styles.otpInput}
            textInputStyle={{
              borderRadius: 10,
              borderWidth: 4,
              color: 'white',
              fontFamily: 'UbuntuMono-Regular',
            }}
            handleTextChange={handleChange}
            inputCount={6}
            tintColor="white"
            offTintColor="#2c6d64"
          />
          {otp.length == '6' ? (
            <TouchableOpacity
              style={[
                styles.sendOtpBtn,
                {backgroundColor: colors.primary, paddingHorizontal: 20},
              ]}
              onPress={() => {
                confirmCode();
              }}>
              <MyText
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Verify{' '}
              </MyText>
              <Icon name="arrowright" size={24} color="white" />
            </TouchableOpacity>
          ) : (
            <View
              style={[
                styles.sendOtpBtn,
                {backgroundColor: colors.secondryBg, width: 50},
              ]}>
              <Icon name="arrowright" size={30} color="grey" />
            </View>
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  otpInput: {
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: 'white',
    fontSize: 20,
  },

  sendOtpBtn: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 10,
  },
});
