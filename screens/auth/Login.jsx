import {
  Dimensions,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import MyText from '../../components/MyText';
import LoginPageSetup from '../../components/LoginPagesetup';
import {MotiView, AnimatePresence, Text} from 'moti';
import auth from '@react-native-firebase/auth';
import {useRecoilState} from 'recoil';
import {FAuthConfirm} from '../../providers/recoilStore.js';
import {FUserData, Name} from '../../providers/recoilStore.js';
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import {colors} from '../../utils/colors';
import Loader from '../../utils/loader';
import {firebase} from '@react-native-firebase/firestore';
import {Svg, SvgUri} from 'react-native-svg';
import {ArrowRight} from '../../components/Svgicon';

const {width, height} = Dimensions.get('window');
export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [errorFeed, setErrorFeed] = useState('');
  const [alertF, setAlertF] = useState('');
  const [number, setNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [isLoging, setIsLoging] = useState(true);
  const [exited, setExited] = useState(false);
  const [okForOtp, setOkForOtp] = useState(false);
  const [fbConfirm, setFbConfirm] = useRecoilState(FAuthConfirm);

  const [userData, setUserData] = useRecoilState(FUserData);

  useEffect(() => {
    setUserData(null);
  }, []);

  useEffect(() => {
    if (loading) {
      if (confirm != null) {
        setFbConfirm(confirm);
        navigation.navigate(
          'Otp',
          isLoging
            ? {mob: number}
            : {mob: number, userName: userName.toLowerCase()},
        );
      }
    }
  }, [confirm]);

  //Is Old User?
  async function isOldUser(mob) {
    try {
      const userDoc = await usersRef
        .where('mob', '==', mob)
        .get()
        .then(querySnapshot => {
          return querySnapshot.docs[0];
        });
      return !!userDoc;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  useEffect(() => {
    if (isLoging) {
      if (number.length == 10) {
        //Check if old user
        const tellIsOld = async () => {
          const isOld = await isOldUser(number);
          if (isOld) {
            setOkForOtp(true);
          } else {
            setOkForOtp(false);
            setAlertF(
              `It seems you're a new user.\nPlease create a new account ;>`,
            );
          }
        };
        tellIsOld();
      } else {
        setOkForOtp(false);
      }
    } else {
      if (number.length == 10 && userName.length > 4) {
        const verifyAll = async () => {
          const isOld = await isOldUser(number);
          const isUnique = await isUsernameUnique(userName.toLowerCase());
          if (isOld) {
            setOkForOtp(false);
            setAlertF(`It seems you're an old user.\nPlease login instead ;)`);
          } else if (!isUnique) {
            setOkForOtp(false);
          } else {
            setOkForOtp(true);
          }
        };
        verifyAll();
      } else {
        setOkForOtp(false);
      }
    }
  }, [number, userName, isLoging]);

  // Is username unique?
  const usersRef = firebase.firestore().collection('user');

  async function isUsernameUnique(username) {
    try {
      const nameDoc = await usersRef
        .where('username', '==', username)
        .get()
        .then(querySnapshot => {
          return querySnapshot.docs[0];
        });
      return !nameDoc;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  useEffect(() => {
    if (userName.length == 0) {
      setErrorFeed('');
    } else if (userName.length <= 4) {
      setErrorFeed('Username too short! Please use at least 5 characters.');
    } else {
      const tellIsUnique = async () => {
        const isUnique = await isUsernameUnique(userName.toLowerCase());
        if (isUnique) {
          setErrorFeed('');
        } else {
          setErrorFeed('Name is already taken. Show some more creativity ;)');
        }
      };
      tellIsUnique();
    }
  }, [userName]);

  const signInWithPhoneNumber = async phoneNumber => {
    setLoading(true);
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
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
      <Loader loading={loading} />
      <LoginPageSetup>
        <View style={styles.topLine}>
          <TouchableOpacity
            onPress={() => {
              setIsLoging(true);
            }}>
            <MyText
              style={[
                styles.topLineTxt,
                isLoging ? {color: 'white', fontSize: 26} : {color: 'grey'},
              ]}>
              I Am Old User
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
            //Login
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
                marginTop: 20,
              }}>
              <View style={styles.InputContainer}>
                <MyText
                  style={{
                    fontSize: 20,
                    color: 'white',
                  }}>
                  +91-
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
                  cursorColor={'white'}
                />
              </View>
            </MotiView>
          ) : exited ? (
            //Register
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
                backgroundColor: 'transparent',
                borderRadius: 10,
                marginTop: 20,
              }}>
              <View style={styles.InputContainer}>
                <FIcon name="at-sign" size={20} color="white" />
                <TextInput
                  onChangeText={text => {
                    //username filter
                    const newText = text.replace(/[^a-zA-Z0-9_]/g, '');
                    setUserName(newText);
                  }}
                  value={userName}
                  style={[styles.txtInput, {marginLeft: 10}]}
                  placeholder="Unique Username"
                  placeholderTextColor={'grey'}
                  maxLength={20}
                  cursorColor={'white'}
                />
              </View>
              <MyText
                style={{
                  fontSize: 12,
                  height: 20,
                  color: 'crimson',
                  marginLeft: 25,
                  paddingTop: 5,
                }}>
                {errorFeed}
              </MyText>
              <View style={styles.InputContainer}>
                <MyText
                  style={{
                    fontSize: 20,
                    color: 'white',
                  }}>
                  +91-
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
                  // autoFocus={true}
                  inputMode="numeric"
                  maxLength={10}
                  cursorColor={'white'}
                />
              </View>
            </MotiView>
          ) : null}
        </AnimatePresence>
        {okForOtp ? (
          <TouchableOpacity
            style={[
              styles.sendOtpBtn,
              {backgroundColor: colors.primary, paddingHorizontal: 20},
            ]}
            onPress={() => {
              signInWithPhoneNumber(`+91${number}`);
            }}>
            <MotiView
              from={{
                opacity: 0,
                translateX: 200,
                width: 0,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
                width: 100,
              }}
              transition={{
                type: 'timing',
                duration: 250,
              }}>
              <MyText
                numberOfLines={1}
                style={{
                  fontSize: 24,
                  color: 'white',
                }}>
                Get OTP{' '}
              </MyText>
              {/* <Text
                numberOfLines={1}
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Get OTP{' '}
              </Text> */}
            </MotiView>
            <Icon name="arrowright" size={24} color="white" />
          </TouchableOpacity>
        ) : (
          <View
            style={[
              styles.sendOtpBtn,
              {backgroundColor: colors.secondryBg, width: 50},
            ]}>
            {/* <MyText
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Get OTP{' '}
            </MyText> */}
            <Icon name="arrowright" size={30} color="grey" />
            {/* <ArrowRight size={35} accentColor="white" /> */}
          </View>
        )}
      </LoginPageSetup>
      <AwesomeAlert
        show={alertF.length > 0}
        showProgress={false}
        title="Oops!"
        message={alertF}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        showCancelButton={true}
        cancelText="  Edit  "
        cancelButtonColor={colors.primary}
        confirmText="  OK  "
        confirmButtonColor="black"
        onCancelPressed={() => {
          setAlertF('');
        }}
        onConfirmPressed={() => {
          setAlertF('');
          setIsLoging(!isLoging);
        }}
        onDismiss={() => {
          setAlertF('');
          // setIsLoging(!isLoging);
        }}
        //Styles
        titleStyle={{
          fontSize: 30,
          color: 'black',
          marginTop: -10,
        }}
        messageStyle={{
          fontSize: 18,
        }}
        confirmButtonTextStyle={{
          fontSize: 20,
        }}
        cancelButtonTextStyle={{
          fontSize: 20,
        }}
        contentContainerStyle={{
          width: width - 50,
          height: 200,
          paddingTop: 0,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
        overlayStyle={{
          backgroundColor: 'rgba(0,0,0,0)',
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  topLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topLineTxt: {
    fontSize: 25,
  },
  InputContainer: {
    width: '100%',
    // backgroundColor: 'grey',
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtInput: {
    flex: 1,
    backgroundColor: 'transparent',
    // borderRadius: 5,
    padding: 0,
    fontSize: 20,
    color: 'white',
    fontFamily: 'UbuntuMono-Regular',
  },
  sendOtpBtn: {
    // paddingHorizontal: 20,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 30,
    right: 20,
    transition: 'all 0.5s ease-in-out',
  },
});
