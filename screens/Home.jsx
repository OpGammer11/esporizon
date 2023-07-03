import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  Image,
  RefreshControl,
} from 'react-native';
import dynamiclinks from '@react-native-firebase/dynamic-links';
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
import Animated from 'react-native-reanimated';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';
import {MotiView} from 'moti';
import {SharedElement} from 'react-navigation-shared-element';

const {width, height} = Dimensions.get('window');
export default function HomeSetup({navigation}) {
  const [greet, setGreet] = useState(getRandomGreeting());
  const [userData, setUserData] = useRecoilState(FUserData);
  const [refreshing, setRefreshing] = useState(false);
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
  }, []);
  function getUserData() {
    const user = auth().currentUser;
    if (user) {
      firestore()
        .collection('user')
        .doc(user.uid)
        .get()
        .then(documentSnapshot => {
          if (documentSnapshot.exists) {
            console.log('User data: ', documentSnapshot.data());
            setUserData(documentSnapshot.data());
            console.log('user data fetched');
          }
        });
    }
  }
  useEffect(() => {
    const unsubscribe = dynamiclinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);

  function handleDynamicLink(link) {
    if (link.url === 'https://esporizon.in/user/anku') {
      console.log('link matched', link.url);
    }
  }
  function conr() {
    console.log('conr');
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getUserData();
    setRefreshing(false);
  }, []);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
            progressBackgroundColor={colors.secondryBg}
          />
        }
        style={{
          backgroundColor: colors.background,
        }}>
        <SafeAreaView
          style={{
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: colors.background,
          }}>
          <MotiView
            from={{
              opacity: 0,
              translateY: -100,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              type: 'timing',
              duration: 200,
              delay: 1000,
            }}
            style={styles.header}>
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
            <View
              style={{
                zIndex: numberOfLines === 1 ? 1 : -9999,
                opacity: numberOfLines === 1 ? 1 : 0.3,
                position: 'absolute',
                right: s(60),
                paddingLeft: 10,
                borderRadius: 30,
                backgroundColor: colors.secondryBg,
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Balance');
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 5,
                }}>
                <MyText
                  style={{
                    fontSize: 18,
                    color: colors.text,
                  }}>
                  {kFormatter(userData?.espocoin || 999)}
                </MyText>
                <View
                  style={{
                    width: s(22),
                    height: s(22),
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
              </Pressable>
            </View>

            {/* //profile */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile', {show: 'profile'});
              }}
              style={styles.profile}>
              <SharedElement
                style={{
                  width: '100%',
                  height: '100%',
                }}
                id={`profile`}>
                <Image
                  source={require('../assets/defaultpfp.png')}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 50,
                  }}
                />
              </SharedElement>
            </TouchableOpacity>
          </MotiView>
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
    marginTop: ms(10),
  },
  profile: {
    width: s(45),
    height: s(45),
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
