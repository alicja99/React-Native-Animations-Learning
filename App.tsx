import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppScreen from './src/utillities/AppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <AppScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
