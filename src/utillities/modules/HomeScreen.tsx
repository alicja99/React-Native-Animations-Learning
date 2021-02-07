import React from 'react';
import Card from './molecules/Card';
import {View, Text, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const HomeScreen = () => {
  return (
    <View styles={styles.container}>
      <Card text={'First card'} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: scale(20),
    margin: scale(20),
  },
});
