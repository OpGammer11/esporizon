import {atom, DefaultValue} from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeRecoilPersist from 'react-native-recoil-persist';

const {persistAtom} = ReactNativeRecoilPersist;

export const FAuthConfirm = atom({
  key: 'fbConfirm',
  default: null,
});

export const FUserData = atom({
  key: 'fbUser',
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const Name = atom({
  key: 'name',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

// // presist Atom
// const presistAtom = key => {
//   return ({setSelf, onSet}) => {
//     setSelf(
//       AsyncStorage.getItem(key).then(savedValue => {
//         savedValue != null ? JSON.parse(savedValue) : new DefaultValue();
//       }),
//     );
//     onSet(newValue => {
//       if (newValue instanceof DefaultValue) {
//         AsyncStorage.removeItem(key);
//       } else {
//         AsyncStorage.setItem(key, JSON.stringify(newValue));
//       }
//     });
//   };
// };
