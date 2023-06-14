import {View, Text} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';

export const MotiLogin = ({children}) => {
  return (
    <MotiView
      key={'login'}
      from={{
        opacity: 0,
        translateX: -100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      exit={{
        opacity: 0,
        translateX: -100,
      }}
      transition={{
        type: 'timing',
        duration: 200,
      }}
      exitTransition={{
        type: 'timing',
        duration: 200,
      }}
      style={{
        flex: 1,
        backgroundColor: 'black',
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </MotiView>
  );
};
export const MotiReg = ({children}) => {
  return (
    <MotiView
      key={'register'}
      from={{
        opacity: 0,
        translateX: 100,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        type: 'timing',
        duration: 200,
      }}
      exit={{
        opacity: 0,
        translateX: 100,
      }}
      exitTransition={{
        type: 'timing',
        duration: 200,
      }}
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </MotiView>
  );
};
