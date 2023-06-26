import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  Pressable,
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

const {width, height} = Dimensions.get('window');
export default function HomeSetup({navigation}) {
  // const Tab = createBottomTabNavigator();

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
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: numberOfLines === 1 ? '60%' : 'auto',
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
                <MyText serif style={{fontSize: 18, color: 'grey'}}>
                  {`${greet.toLocaleUpperCase()}`},
                </MyText>

                <MyText
                  serif
                  numberOfLines={numberOfLines}
                  style={{
                    fontSize: 28,
                    color: colors.text,
                  }}>
                  {`${username.charAt(0).toUpperCase()}${username.slice(1)}!`}
                </MyText>
              </Pressable>
            </View>
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
          <HomeMain />
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
