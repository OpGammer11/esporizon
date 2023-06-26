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
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  },
  translateXleft: {
    headerShown: false,
    gestureDirection: 'horizontal',
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
                inputRange: [0, 1],
                outputRange: [-layouts.screen.width, 0],
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
                inputRange: [0, 1],
                outputRange: [layouts.screen.height, 0],
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
