import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {usePanGestureHandler, withOffset} from 'react-native-redash';

const GestureMove = () => {
  const {gestureHandler, translation, state} = usePanGestureHandler();
  const translateX = withOffset(translation.x, state);
  const translateY = withOffset(translation.y, state);

  return (
    <SafeAreaView style={styles.container}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={[styles.ball, {transform: [{translateX}, {translateY}]}]}
        />
      </PanGestureHandler>
    </SafeAreaView>
  );
};
export default GestureMove;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    backgroundColor: '#89CFF0',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
});
