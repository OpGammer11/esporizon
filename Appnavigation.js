// React native navigation
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {TransitionSpecs} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {screenStackConfig, staticConfig} from './utils/pagetransitions';
import auth from '@react-native-firebase/auth';

// Screens
import Root from './screens/Root';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import Login from './screens/auth/Login';
import Otp from './screens/auth/Otp';

const Stack = createSharedElementStackNavigator();

export default function Appnavigator() {
  const [isLoggedin, setIsLoggedin] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        {isLoggedin ? (
          <>
            <Stack.Screen
              name="Root"
              component={Root}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={screenStackConfig.translateX}
              sharedElements={(route, otherRoute, showing) => {
                const {image} = route.params;
                return [`item.${image}.photo`];
              }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={screenStackConfig.translateX}
              sharedElements={(route, otherRoute, showing) => {
                const {image} = route.params;
                return [`item.${image}.photo`];
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Otp" component={Otp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
