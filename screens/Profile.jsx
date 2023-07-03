import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import dynamiclinks from '@react-native-firebase/dynamic-links';
import Clipboard from '@react-native-clipboard/clipboard';
import {useRecoilState} from 'recoil';
import {FUserData} from '../providers/recoilStore';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import FIcon from 'react-native-vector-icons/Feather';
import {colors} from '../utils/colors';
import MyText from '../components/MyText';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

export default function Profile({navigation}) {
  const route = useRoute();
  const params = route.params;
  const [userData, setUserData] = useRecoilState(FUserData);
  const [userLink, setUserLink] = useState(null);
  const insets = useSafeAreaInsets();

  useEffect(() => {}, []);

  async function genUserLink() {
    const link = await dynamiclinks().buildLink({
      link: `https://esporizon.in/user?uid=${userData.username}`,
      domainUriPrefix: 'https://esporizon.page.link',

      // optional setup which updates Firebase analytics campaign
      // "banner". This also needs setting up before hand
      analytics: {
        campaign: 'banner',
      },
    });
    console.log(link);
    setUserLink(link);
    return link;
  }

  function copyLink() {
    Clipboard.setString(userLink);
  }

  useEffect(() => {
    const unsubscribe = dynamiclinks().onLink(handleDynamicLink);

    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  function handleDynamicLink(link) {
    // Handle dynamic link inside your own application
    if (link.url) {
      console.log('link', link);
    }
  }
  function conr() {
    console.log('conr');
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
      }}>
      <View style={[styles.header, {top: insets.top + 20}]}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: 20,
            borderRadius: s(15),
            width: vs(40),
            height: vs(40),
            backgroundColor: colors.secondryBg,
          }}
          onPress={() => navigation.goBack()}>
          <FIcon name="arrow-left" size={vs(25)} color={colors.text} />
        </TouchableOpacity>

        <MyText
          style={{
            fontSize: 30,
            color: colors.text,
            alignSelf: 'center',
          }}>
          Profile
        </MyText>
      </View>

      <SharedElement
        style={{
          position: 'absolute',
          top: 130,
          width: 100,
          height: 100,
        }}
        id={'profile'}>
        <Image
          source={require('../assets/defaultpfp.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      </SharedElement>
      <View style={styles.main}>
        <Pressable
          style={styles.btn}
          onPress={() => {
            genUserLink();
          }}>
          <MyText
            style={{
              fontSize: 30,
              color: colors.text,
            }}>
            {params?.username}
          </MyText>
        </Pressable>
        <Pressable
          style={styles.btn}
          onPress={() => {
            copyLink();
          }}>
          <MyText
            style={{
              fontSize: 30,
              color: colors.text,
            }}>
            Copy Link
          </MyText>
        </Pressable>
        <MyText
          style={{
            fontSize: 20,
            textAlign: 'center',
            marginHorizontal: 20,
            color: colors.primary,
          }}>
          {userLink ? userLink : 'No Link Generated'}
        </MyText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: width,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 9,
  },
  main: {
    width: width,
    height: height - 200,
    marginTop: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: 'transparent',
  },
});
