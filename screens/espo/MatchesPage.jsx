import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MyText from '../../components/MyText';
import {useRecoilValue} from 'recoil';
import FIcon from 'react-native-vector-icons/Feather';
import {FlashList} from '@shopify/flash-list';
import {colors} from '../../utils/colors';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Skeleton} from 'moti/skeleton';
const {width, height} = Dimensions.get('window');

const CARD_HEIGHT = vs(180);
const HEAD_FONTSIZE = ms(16);
const JOINED_PPL = 45;

function EspoCard({item, navigation, route}) {
  const {gameId} = route.params;
  return (
    <View
      style={{
        width: width - 60,
        height: CARD_HEIGHT,
        backgroundColor: colors.secondryBg,
        marginRight: 10,
        borderRadius: 8,
        padding: 10,
      }}>
      {/* date*/}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          borderColor: 'gray',
          borderRadius: 8,
          borderWidth: 1,
          backgroundColor: colors.background,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
          }}>
          <View
            style={{
              opacity: 0.7,
            }}>
            <FIcon name="calendar" size={ms(18)} color={colors.text} />
          </View>
          <View
            style={{
              height: ms(15),
              marginBottom: ms(-1),
            }}>
            <MyText
              teko
              style={{
                fontSize: ms(14),
                color: colors.text,
              }}>
              1 day after got full
            </MyText>
          </View>
        </View>
        <View>
          <MyText
            teko
            style={{
              fontSize: ms(12),
              color: colors.text,
              height: ms(12),
              opacity: 0.7,
            }}>
            20 Coins / Kill
          </MyText>
        </View>
      </View>

      {/* game prize and price */}
      <View
        style={{
          marginTop: 15,
          gap: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            // padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 10,
              justifyContent: 'center',
            }}>
            <MyText
              style={{
                fontSize: ms(16),
                color: colors.text,
                opacity: 0.7,
              }}>
              Prize Pool
            </MyText>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
              }}>
              <View
                style={{
                  width: s(28),
                  height: s(28),
                }}>
                <Image
                  source={require('../../assets/espocoin.png')}
                  style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                />
              </View>
              <View
                style={{
                  height: s(28),
                }}>
                <MyText
                  teko
                  style={{
                    fontSize: s(28),
                    color: colors.text,
                  }}>
                  1000
                </MyText>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: 10,
              justifyContent: 'center',
            }}>
            <MyText
              style={{
                fontSize: ms(16),
                color: colors.text,
                opacity: 0.7,
              }}>
              Entry
            </MyText>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors.greenColor,
                borderRadius: 8,
                paddingHorizontal: 15,
                paddingVertical: 5,
                gap: 5,
              }}>
              <View
                style={{
                  width: 24,
                  height: 24,
                }}>
                <Image
                  source={require('../../assets/espocoin.png')}
                  style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                />
              </View>
              <View
                style={{
                  height: ms(24),
                }}>
                <MyText
                  teko
                  style={{
                    fontSize: ms(24),
                    color: colors.text,
                  }}>
                  10
                </MyText>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '85%',
              height: 4,
              backgroundColor: 'darkgray',
              borderRadius: 10,
            }}>
            <View
              style={{
                width: `${JOINED_PPL}%`,
                height: 4,
                backgroundColor: colors.primary,
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginLeft: 'auto',
            }}>
            <MyText
              teko
              style={{
                fontSize: ms(18),
                color: colors.coinColor,
              }}>
              {JOINED_PPL}
            </MyText>
            <MyText
              teko
              style={{
                fontSize: ms(18),
                color: 'darkgray',
              }}>
              /100
            </MyText>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function MatchesPage({navigation, route}) {
  const insets = useSafeAreaInsets();
  const {gameId} = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      nestedScrollEnabled={true}
      contentContainerStyle={{
        flexGrow: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: insets.bottom + 20,
      }}>
      <MyText
        style={{
          fontSize: HEAD_FONTSIZE,
          color: colors.text,
          marginBottom: 10,
        }}>
        Solo
      </MyText>
      <FlashList
        horizontal
        estimatedItemSize={CARD_HEIGHT}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerStyle={{paddingLeft: -10}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <EspoCard item={item} navigation={navigation} route={route} />
        )}
        onEndReached={() => console.log('end reached')}
        onEndReachedThreshold={0.5}
      />
      <MyText
        style={{
          fontSize: HEAD_FONTSIZE,
          color: colors.text,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Squad
      </MyText>
      <FlashList
        horizontal
        estimatedItemSize={CARD_HEIGHT}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item}) => (
          <EspoCard item={item} navigation={navigation} route={route} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => console.log('end reached')}
        onEndReachedThreshold={0.5}
      />
      <MyText
        style={{
          fontSize: HEAD_FONTSIZE,
          color: colors.text,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Free
      </MyText>
      <FlashList
        horizontal
        estimatedItemSize={CARD_HEIGHT}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item}) => (
          <EspoCard item={item} navigation={navigation} route={route} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => console.log('end reached')}
        onEndReachedThreshold={0.5}
      />
      <MyText
        style={{
          fontSize: HEAD_FONTSIZE,
          color: colors.text,
          marginTop: 20,
          marginBottom: 10,
        }}>
        Premium
      </MyText>
      <FlashList
        horizontal
        estimatedItemSize={CARD_HEIGHT}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({item}) => (
          <EspoCard item={item} navigation={navigation} route={route} />
        )}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => console.log('end reached')}
        onEndReachedThreshold={0.5}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
