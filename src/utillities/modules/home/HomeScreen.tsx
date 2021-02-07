import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeScreenNavigationProp} from '../../navigation/NavigationTypes';
import Card from '../Card';

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({navigation}: Props) => {
  const renderBall = () => <View style={styles.ball}></View>;
  const firstCardOnPress = () => navigation.navigate('GestureMove');

  return (
    <SafeAreaView styles={styles.container}>
      <Card
        text={'Gesture Ball Move'}
        onPress={firstCardOnPress}
        children={renderBall()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    backgroundColor: '#89CFF0',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignSelf: 'center',
    marginBottom: 50,
  },
});
