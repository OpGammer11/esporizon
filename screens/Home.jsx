import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
import {SvgUri} from 'react-native-svg';
import auth from '@react-native-firebase/auth';
import {useRecoilState} from 'recoil';
import {FUserData, Name} from '../providers/recoilStore';
import MyText from '../components/MyText';
import firestore from '@react-native-firebase/firestore';
import {Notification} from '../components/Svgicon';
import {colors} from '../utils/colors';
import {formatNumber} from '../utils/number';

export default function Home({navigation}) {
  const {width, height} = Dimensions.get('window');

  const [userData, setUserData] = useRecoilState(FUserData);
  const {username, uid, mob} = userData || {username: '', uid: '', mob: ''};

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
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          backgroundColor: colors.background,
        }}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 30,
              borderColor: colors.secondryBg,
              borderWidth: 2,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',

              //shadow
              shadowColor: colors.secondary,
              shadowOffset: {
                width: 0,
                height: 30,
              },
              shadowOpacity: 0.5,
              shadowRadius: 20,
              elevation: 30,
            }}>
            <SvgUri
              uri={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${username}&backgroundColor=ffdfbf`}
              height={50}
              width={50}
            />
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'center',
              // backgroundColor: 'white',
            }}>
            <MyText style={{fontSize: 26, color: 'grey'}}>Hello,</MyText>
            <MyText
              style={{
                fontSize: 26,
                color: colors.text,
                marginLeft: 5,
              }}>
              {username
                ? `${username.charAt(0).toUpperCase()}${username.slice(1)}!`
                : ''}
            </MyText>
          </View>
          <View
            style={{
              borderRadius: 20,
              height: 50,
              width: 50,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2b2c28',
              alignSelf: 'flex-end',
              marginLeft: 'auto',

              //shadow
              shadowColor: colors.secondary,
              shadowOffset: {
                width: 10,
                height: 0,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 16,
            }}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('Notification');
                auth().signOut();
              }}>
              <Notification size={32} accentColor={'grey'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.main}>
          <MyText style={{fontSize: 32, color: colors.text, marginBottom: 20}}>
            {formatNumber(9000)}
          </MyText>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'white',
  },
  main: {
    flex: 1,
    // backgroundColor: 'white',
    marginTop: 40,
  },
  earningsCard: {
    height: 250,
    width: '100%',
    borderRadius: 20,
    backgroundColor: colors.background,
    padding: 20,

    //shadow
    shadowColor: 'grey',
    shadowOffset: {
      width: 10,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16.0,
    elevation: 16,
  },
  earningsCardHeader: {
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
});
