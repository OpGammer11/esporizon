import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {isOnEndState} from '../../providers/recoilStore';
import {colors} from '../../utils/colors';
import MyText from '../../components/MyText';
import FIcon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {kFormatter} from '../../utils/number';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

export default function EspoPageSetup({navigation, route, children}) {
  const insets = useSafeAreaInsets();
  const {gameId} = route.params;
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    if (gameId === 'bgmi') {
      setGameData({
        name: 'BGMI',
        image: require('../../assets/games/pubgbg.webp'),
        // logo: require('../../assets/games/pubglogo.png'),
      });
    } else if (gameId === 'freefire') {
      setGameData({
        name: `FREE FIRE`,
        image: require('../../assets/games/freefirebg.jpg'),
        logo: require('../../assets/games/freefirelogo2.png'),
      });
    } else if (gameId === 'codm') {
      setGameData({
        name: 'COD MOBILE',
        image: require('../../assets/games/codmbg.jpg'),
      });
    }
  }, [gameId]);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        scrollEventThrottle={16}
        contentContainerStyle={{flexGrow: 1}}>
        <SafeAreaView style={styles.wrapper}>
          <View style={[styles.header, {top: insets.top + 5}]}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: s(15),
                width: vs(40),
                height: vs(40),
                backgroundColor: colors.secondryBg,
              }}
              onPress={() => navigation.goBack()}>
              <FIcon name="arrow-left" size={vs(24)} color={colors.text} />
            </TouchableOpacity>
            {/* //espocoin */}
            <View
              style={{
                position: 'absolute',
                right: 20,
                marginLeft: 'auto',
                paddingLeft: s(10),
                borderRadius: 30,
                alignSelf: 'center',
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
                  {kFormatter(999)}
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
                    source={require('../../assets/espocoin.png')}
                  />
                </View>
              </Pressable>
            </View>
          </View>
          <View style={[styles.bg, {height: height + insets.top}]}>
            {gameData?.image && (
              <Image
                blurRadius={1}
                source={gameData.image}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  transform: [{scaleX: 1}],
                }}
              />
            )}
            <View
              style={{
                width: width,
                height: height,
                position: 'absolute',
                backgroundColor: colors.background,
                opacity: 0.7,
              }}
            />
          </View>
          <View
            style={{
              height: height + insets.top,
              width: width,
              justifyContent: 'flex-end',
              position: 'absolute',
              zIndex: -1,
            }}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 0, y: 0}}
              colors={[
                colors.background,
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,0.9)',
                'rgba(0,0,0,0.8)',
                'transparent',
              ]}
              style={styles.mainContainer}></LinearGradient>
          </View>
          <View
            style={{
              width: width,
              height: height,
              backgroundColor: 'transparent',
              marginTop: height / 3,
            }}>
            {/* <MyText
              // teko
              bold
              style={{fontSize: 50, color: colors.text, paddingHorizontal: 20}}>
              {gameData?.name}
            </MyText> */}
            <View
              style={{
                width: '60%',
                height: 50,
                backgroundColor: 'transparent',
                marginLeft: 20,
              }}>
              {/* //logo */}
              {gameData?.logo ? (
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain',
                  }}
                  source={gameData.logo}
                />
              ) : (
                <MyText
                  bold
                  style={{
                    fontSize: 50,
                    color: colors.text,
                    // paddingHorizontal: 20,
                  }}>
                  {gameData?.name}
                </MyText>
              )}
            </View>
            {children}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

export const isOnEnd = isOnEnd;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
  bg: {
    position: 'absolute',
    top: 0,
    width: width,
    zIndex: -1,
  },
  header: {
    width: width,
    paddingHorizontal: 20,
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 9,
  },
  mainContainer: {
    backgroundColor: 'transparent',
    width: width,
    height: height / 1.3,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  main: {
    width: width,
    height: height,
    backgroundColor: 'transparent',
  },
});
