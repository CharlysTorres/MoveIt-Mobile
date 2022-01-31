import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import HomeSvg from '../../assets/icons/home.svg';

interface ButtomProps {
  size: number;
  focused: boolean;
}

export function ButtomHome({focused, size }: ButtomProps) {
  return (
    <View
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
    <View 
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#5965e0',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <HomeSvg 
        stroke="#FFF"
      />
    </View>
  </View>
  );
}

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#666',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
});