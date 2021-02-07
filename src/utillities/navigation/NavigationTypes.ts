import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  GestureMove: undefined;
  Home: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GestureMove' | 'Home'
>;
