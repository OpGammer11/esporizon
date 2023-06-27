import {TransitionSpecs} from '@react-navigation/stack';

export const staticConfig = {
  animation: 'timing',
  config: {
    duration: 250,
  },
};

export const screenStackConfig = {
  translateX: {
    headerShown: false,
    gestureDirection: 'horizontal',
    gestureEnabled: true,
    gestureResponseDistance: 150,
    transitionSpec: {
      open: staticConfig,
      close: staticConfig,
    },
    cardStyleInterpolator: ({current: {progress}, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [layouts.screen.width, 0, 0],
              }),
            },
          ],
        },
      };
    },
  },
  translateXleft: {
    headerShown: false,
    transitionSpec: {
      open: staticConfig,
      close: staticConfig,
    },
    cardStyleInterpolator: ({current: {progress}, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [-layouts.screen.width, 0, 0],
              }),
            },
          ],
        },
      };
    },
  },
  translateY: {
    headerShown: false,
    gestureDirection: 'vertical',
    gestureEnabled: true,
    gestureResponseDistance: 500,
    transitionSpec: {
      open: staticConfig,
      close: staticConfig,
    },
    cardStyleInterpolator: ({current: {progress}, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [layouts.screen.height, 0, 0],
              }),
            },
          ],
        },
      };
    },
  },
  opacity: {
    headerShown: false,
    transitionSpec: {
      open: staticConfig,
      close: staticConfig,
    },
    cardStyleInterpolator: ({current: {progress}}) => {
      return {
        cardStyle: {
          opacity: progress,
        },
      };
    },
  },
};
