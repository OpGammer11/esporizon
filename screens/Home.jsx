import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SvgUri} from 'react-native-svg';
import auth from '@react-native-firebase/auth';
import {useRecoilState} from 'recoil';
import {FUserData} from '../providers/recoilStore';
import MyText from '../components/MyText';
import firestore from '@react-native-firebase/firestore';
import {colors} from '../utils/colors';
import getRandomGreeting from '../utils/randomgreet';
import HomeMain from '../components/Homemain';
import {formatNumber, kFormatter} from '../utils/number';

const {width, height} = Dimensions.get('window');
export default function HomeSetup({navigation}) {
  const [greet, setGreet] = useState(getRandomGreeting());
  const [userData, setUserData] = useRecoilState(FUserData);
  const {username, uid, mob} = userData || {username: '', uid: '', mob: ''};
  const [numberOfLines, setNumberOfLines] = useState(1);

  useEffect(() => {
    if (!auth().currentUser) {
      return;
    }

    if (userData === null) {
      getUserData();
    } else {
      // console.log('user data is already there');
    }

    function getUserData() {
      const user = auth().currentUser;
      if (user) {
        firestore()
          .collection('user')
          .doc(user.uid)
          .get()
          .then(documentSnapshot => {
            if (documentSnapshot.exists) {
              setUserData(documentSnapshot.data());
            }
          });
      }
    }
  }, []);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        style={{
          backgroundColor: colors.background,
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: colors.background,
          }}>
          <View style={styles.header}>
            {/* //greet */}
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                backgroundColor: 'transparent',
                justifyContent: 'center',
                width: numberOfLines === 1 ? '50%' : 'auto',
                overflow: 'hidden',
              }}>
              <Pressable
                delayLongPress={100}
                onPressOut={() => {
                  setNumberOfLines(1);
                }}
                onLongPress={() => {
                  setNumberOfLines(0);
                }}>
                <MyText style={{fontSize: 18, color: 'grey'}}>{greet},</MyText>
                <MyText
                  numberOfLines={numberOfLines}
                  style={{
                    fontSize: 28,
                    color: colors.text,
                  }}>
                  {`${username.charAt(0).toUpperCase()}${username.slice(1)}!`}
                </MyText>
              </Pressable>
            </View>

            {/* //espocoin */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Balance');
              }}
              style={{
                zIndex: numberOfLines === 1 ? 1 : -9999,
                opacity: numberOfLines === 1 ? 1 : 0.3,
                position: 'absolute',
                right: 60,
                paddingLeft: 10,
                borderRadius: 30,
                backgroundColor: colors.secondryBg,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 5,
              }}>
              <MyText
                style={{
                  fontSize: 20,
                  color: colors.text,
                }}>
                {kFormatter(userData?.espocoin || 999)}
              </MyText>

              <View
                style={{
                  width: 28,
                  height: 28,
                }}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                  source={require('../assets/espocoin.png')}
                />
              </View>
            </TouchableOpacity>

            {/* //profile */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}
              style={styles.profile}>
              <SvgUri
                uri={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${username}&backgroundColor=ffdfbf`}
                height={50}
                width={50}
              />
            </TouchableOpacity>
          </View>
          <HomeMain navigation={navigation} />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderColor: colors.secondryBg,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: 'auto',

    //shadow
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 50,
  },
});
