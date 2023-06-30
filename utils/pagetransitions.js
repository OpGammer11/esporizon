import {TransitionSpecs} from '@react-navigation/stack';
import {Easing, Dimensions, Animated} from 'react-native';

const {width, height} = Dimensions.get('window');

export const staticConfig = {
  animation: Animated.timing,
  useNativeDriver: true,
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
    cardStyleInterpolator: ({current, next, inverted, layouts: {screen}}) => {
      const progress = Animated.add(
        current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        }),
        next
          ? next.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            })
          : 0,
      );

      return {
        cardStyle: {
          transform: [
            {
              translateX: Animated.multiply(
                progress.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [
                    screen.width, // Focused, but offscreen in the beginning
                    0, // Fully focused
                    screen.width * -0.3, // Fully unfocused
                  ],
                  extrapolate: 'clamp',
                }),
                inverted,
              ),
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
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
                outputRange: [-width, 0, 0],
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
    cardStyleInterpolator: ({current, next, inverted, layouts: {screen}}) => {
      const progress = Animated.add(
        current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        }),
        next
          ? next.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            })
          : 0,
      );

      return {
        cardStyle: {
          transform: [
            {
              translateY: Animated.multiply(
                progress.interpolate({
                  inputRange: [0, 1, 2],
                  outputRange: [
                    screen.height, // Focused, but offscreen in the beginning
                    0, // Fully focused
                    screen.height * -0.3, // Fully unfocused
                  ],
                  extrapolate: 'clamp',
                }),
                inverted,
              ),
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          }),
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
