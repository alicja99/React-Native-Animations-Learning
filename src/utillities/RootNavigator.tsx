import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './modules/home/HomeScreen';
import GestureMove from './modules/gesture-move/GestureMove';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="GestureMove" component={GestureMove} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
