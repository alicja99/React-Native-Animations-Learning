import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Styles} from '../resources/Styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {JSX} from '@babel/types';

interface Props {
  text?: string;
  children?: React.ReactElement;
  onPress: () => void;
}

const Card = ({text, onPress, children}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['purple', 'white']}
        style={styles.container}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1.5}}>
        {children}
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(180),
    marginVertical: scale(16),
    width: scale(320),
    alignSelf: 'center',
    justifyContent: 'flex-end',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    ...Styles.latoBold,
    marginBottom: scale(18),
    color: 'white',
    alignSelf: 'center',
    fontSize: scale(24),
  },
});
