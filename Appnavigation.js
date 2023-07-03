// React native navigation
import React, {useEffect, useState} from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {screenStackConfig, staticConfig} from './utils/pagetransitions';
import auth from '@react-native-firebase/auth';

// Screens
import Root from './screens/Root';
import Balance from './screens/Balance';
import Profile from './screens/Profile';
import Login from './screens/auth/Login';
import Otp from './screens/auth/Otp';
import EspoPage from './screens/espo/EspoPage';

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

  const deepLinking = {
    prefixes: ['https://esporizon.in', 'espoApp://'],
    config: {
      initialRouteName: 'Root',
      screens: {
        Root: {
          path: 'root',
          screens: {
            Home: 'home',
            Team: 'team',
            Notification: 'notif',
          },
        },
        Balance: 'balance',
        Profile: {
          path: 'u/:username',
        },
      },
    },
  };

  return (
    <NavigationContainer linking={deepLinking} theme={DarkTheme}>
      <Stack.Navigator
        detachInactiveScreens={true}
        initialRouteName="Root"
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent',
          },
          // presentation: 'modal',
        }}>
        {isLoggedin ? (
          <>
            <Stack.Screen name="Root" component={Root} />
            <Stack.Screen
              name="Balance"
              component={Balance}
              options={{
                presentation: 'transparentModal',
                ...screenStackConfig.modalSlidBottom,
              }}
              sharedElements={(route, otherRoute, showing) => {
                return [`balance`];
              }}
            />
            <Stack.Screen
              name="EspoPage"
              component={EspoPage}
              options={screenStackConfig.translateX}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                ...screenStackConfig.translateX,
                detachPreviousScreen: false,
              }}
              sharedElements={(route, otherRoute, showing) => {
                const {show} = route.params;
                return [`${show}`];
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
