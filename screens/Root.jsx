//Tab Screens
import Home from './Home';
import Team from './Team';
import Notification from './Notification';
//

import {StyleSheet, Text, View, Pressable, Dimensions} from 'react-native';
import React, {Children, useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MotiPressable} from 'moti/interactions';
import {MotiView, AnimatePresence} from 'moti';
import {colors} from '../utils/colors';
import MyText from '../components/MyText';
import {HomeIcon, NotifIcon, TeamIcon} from '../components/Svgicon';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';

const {width, height} = Dimensions.get('window');

function TabBarBtn({accessibilityState, onPress, label, children}) {
  const isFocused = accessibilityState.selected ? true : false;
  return (
    <MotiPressable
      key={`nav-btn-${label}`}
      from={{
        // width: 100,
        backgroundColor: 'transparent',
      }}
      animate={useMemo(() => {
        return {
          // width: isFocused ? 100 : 100,
          backgroundColor: isFocused ? 'white' : 'transparent',
        };
      }, [isFocused])}
      transition={{
        type: 'timing',
        duration: 250,
      }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: s(95),
        padding: ms(5),
        height: vs(40),
        borderRadius: 30,
        backgroundColor: 'transparent',
        gap: 5,
        marginVertical: vs(5),
      }}
      onPress={onPress}>
      <MotiView
        transition={{
          type: 'timing',
          duration: 200,
        }}>
        {label === 'Home' ? (
          <HomeIcon
            size={vs(20)}
            primaryColor={isFocused ? colors.secondryBg : colors.text}
          />
        ) : label === 'Teams' ? (
          <TeamIcon
            size={vs(20)}
            primaryColor={isFocused ? colors.secondryBg : colors.text}
            accentColor={isFocused ? colors.secondryBg : colors.text}
          />
        ) : (
          <NotifIcon
            size={vs(20)}
            primaryColor={isFocused ? colors.secondryBg : colors.text}
            accentColor={isFocused ? colors.secondryBg : colors.text}
          />
        )}
      </MotiView>

      <MotiView
        from={{
          opacity: 0,
          translateX: -20,
        }}
        animate={useMemo(() => {
          return {
            opacity: 1,
            translateX: isFocused ? 0 : -20,
          };
        }, [isFocused])}
        transition={{
          type: 'timing',
          duration: 180,
        }}>
        <MyText
          numberOfLines={1}
          style={{
            color: isFocused ? colors.secondryBg : 'transparent',
            fontSize: ms(18),
          }}>
          {isFocused ? label : ''}
        </MyText>
      </MotiView>
    </MotiPressable>
  );
}

export default function Root() {
  const Tab = createBottomTabNavigator();
  const {top, bottom} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarVisibilityAnimationConfig: {
          type: 'timing',
          duration: 200,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: colors.secondryBg,
          marginBottom: bottom + 20,
          position: 'absolute',
          marginHorizontal: 20,
          borderTopColor: 'transparent',
          borderRadius: 20,
          alignItems: 'center',
          width: width - 40,
          height: vs(50),
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: props => <TabBarBtn label="Home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Team"
        component={Team}
        options={{
          tabBarButton: props => <TabBarBtn label="Teams" {...props} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarButton: props => <TabBarBtn label="Notif" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
