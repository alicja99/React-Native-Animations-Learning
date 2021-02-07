import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const GestureMove = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ball} />
    </SafeAreaView>
  );
};
export default GestureMove;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  ball: {
    backgroundColor: '#89CFF0',
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    alignSelf: 'center',
  },
});
