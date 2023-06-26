import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MyText from './MyText';
import {colors} from '../utils/colors';
import {MotiView} from 'moti';

const {width, height} = Dimensions.get('window');

export default function HomeMain() {
  //random number between 0-1
  function randomNum() {
    return Math.random();
  }

  return (
    <View style={styles.main}>
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
          delay: 1000,
        }}
        style={{
          width: width - 40,
          height: 200,
          backgroundColor: colors.secondryBg,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MyText
          serif
          style={{
            fontSize: 40,
            color: colors.text,
          }}>
          0
        </MyText>
      </MotiView>
      <MyText
        serif
        style={{
          fontSize: 20,
          color: colors.text,
        }}>
        GAMES
      </MyText>
      <TouchableOpacity>
        <View key={'ff'} style={styles.gameCard}>
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
      </TouchableOpacity>
      <TouchableOpacity>
        <View key={'ff'} style={[styles.gameCard]}>
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
      </TouchableOpacity>
      <TouchableOpacity>
        <View key={'ff'} style={styles.gameCard}>
          <View
            style={{
              width: '40%',
              height: '160%',
              position: 'absolute',
              right: 12,
              bottom: 0,
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
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: height,
    marginTop: 30,
    gap: 20,
  },
  gameCard: {
    width: width - 40,
    height: 150,
    backgroundColor: colors.secondryBg,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // overflow: 'hidden',
  },
});
