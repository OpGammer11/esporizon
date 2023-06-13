// React native navigation
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {TransitionSpecs} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {screenStackConfig, staticConfig} from './utils/pagetransitions';

// Screens
import Home from './screens/Home';
import Page from './screens/Profile';
import Login from './screens/Login';

const Stack = createSharedElementStackNavigator();

export default function Appnavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Page"
          component={Page}
          options={screenStackConfig.translateX}
          sharedElements={(route, otherRoute, showing) => {
            const {image} = route.params;
            return [`item.${image}.photo`];
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
