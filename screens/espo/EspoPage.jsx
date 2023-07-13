//Tab Screens
import Matches from './MatchesPage';
import Joined from './JoinedPage';
import Results from './ResultsPage';

import {Image, StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useState, useEffect} from 'react';
import {colors} from '../../utils/colors';
import MyText from '../../components/MyText';
import FIcon from 'react-native-vector-icons/Feather';
import {kFormatter} from '../../utils/number';
import Animated from 'react-native-reanimated';
import {
  scale as s,
  verticalScale as vs,
  moderateScale as ms,
} from 'react-native-size-matters';
import {SharedElement} from 'react-navigation-shared-element';
import EspoPageSetup from '../../components/espo/espoPagesetup';

const {width, height} = Dimensions.get('window');

function TabGroup({navigation, route}) {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: ms(18),
          fontFamily: 'UbuntuMono-Bold',
          textTransform: 'capitalize',
        },
        tabBarStyle: {
          backgroundColor: 'transparent',
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: 3,
          borderRadius: 10,
          alignSelf: 'center',
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Matches"
        options={{
          swipeEnabled: false,
        }}>
        {() => <Matches navigation={navigation} route={route} />}
      </Tab.Screen>
      <Tab.Screen name="Joined">
        {() => <Joined navigation={navigation} route={route} />}
      </Tab.Screen>
      <Tab.Screen name="Results">
        {() => <Results navigation={navigation} route={route} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function EspoPage({navigation, route}) {
  return (
    <>
      <EspoPageSetup navigation={navigation} route={route}>
        <View
          style={{
            flex: 1,
          }}>
          <TabGroup navigation={navigation} route={route} />
        </View>
      </EspoPageSetup>
    </>
  );
}

const styles = StyleSheet.create({});
