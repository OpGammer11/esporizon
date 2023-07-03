import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useMemo} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MyText from './MyText';
import {colors} from '../utils/colors';
import {MotiView} from 'moti';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

export default function HomeMain({navigation}) {
  const LOADING_DELAY = 1000;
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.main, {height: height + bottom}]}>
      <MotiView
        from={{
          opacity: 0,
          translateY: 100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: 'timing',
          duration: 200,
          delay: LOADING_DELAY + 500,
        }}
        style={styles.mainCard}>
        <MyText
          style={{
            fontSize: 20,
            color: colors.text,
          }}>
          {`width: ${width} \nheight: ${height}`}
        </MyText>
      </MotiView>
      <MyText
        style={{
          fontSize: 20,
          color: colors.text,
        }}>
        GAMES
      </MyText>

      {/* //Freefire  */}
      <MotiView
        key={'ff'}
        from={{
          opacity: 0,
          translateX: -100,
        }}
        animate={useMemo(() => {
          return {
            opacity: 1,
            translateX: 0,
          };
        }, [])}
        transition={{
          type: 'timing',
          duration: 250,
          delay: LOADING_DELAY + 100,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('EspoPage', {gameId: 'freefire'});
          }}>
          <View style={[styles.gameCard, {backgroundColor: '#E83A47'}]}>
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.5,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
                source={require('../assets/games/freefirelogo.png')}
              />
            </View>
            <View
              style={{
                width: '60%',
                height: '140%',
                position: 'absolute',
                right: -20,
                bottom: 0,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
                source={require('../assets/games/ff.png')}
              />
            </View>
          </View>
        </Pressable>
      </MotiView>
      {/* //BGMI  */}
      <MotiView
        key={'bgmi'}
        from={{
          opacity: 0,
          translateX: 100,
        }}
        animate={useMemo(() => {
          return {
            opacity: 1,
            translateX: 0,
          };
        }, [])}
        transition={{
          type: 'timing',
          duration: 250,
          delay: LOADING_DELAY + 200,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('EspoPage', {gameId: 'bgmi'});
          }}>
          <View style={[styles.gameCard, {backgroundColor: '#F6972F'}]}>
            <View
              style={{
                width: '110%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.5,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
                source={require('../assets/games/bgmibg.png')}
              />
            </View>
            <View
              style={{
                width: '50%',
                height: '150%',
                position: 'absolute',
                left: -20,
                bottom: -10,
                transform: [{scaleX: -1}],
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
                source={require('../assets/games/pubg.png')}
              />
            </View>
          </View>
        </Pressable>
      </MotiView>
      {/* //COD */}
      <MotiView
        key={'cod'}
        from={{
          opacity: 0,
          translateX: -100,
        }}
        animate={useMemo(() => {
          return {
            opacity: 1,
            translateX: 0,
          };
        }, [])}
        transition={{
          type: 'timing',
          duration: 250,
          delay: LOADING_DELAY + 300,
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('EspoPage', {gameId: 'codm'});
          }}>
          <View style={[styles.gameCard, {backgroundColor: '#017AD8'}]}>
            <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: 0.5,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
                source={require('../assets/games/codbg.png')}
              />
            </View>
            <View
              style={{
                width: '40%',
                height: '160%',
                position: 'absolute',
                right: 12,
                bottom: -0.2,
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }}
                source={require('../assets/games/cod.png')}
              />
            </View>
          </View>
        </Pressable>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: ms(30),
    gap: ms(20),
  },
  gameCard: {
    // flex: 1,
    width: width - 40,
    height: vs(115),
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainCard: {
    width: width - 40,
    height: vs(160),
    backgroundColor: colors.secondryBg,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
