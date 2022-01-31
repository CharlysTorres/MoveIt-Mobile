import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, View, } from 'react-native';

import CloseSvg from '../../assets/icons/close.svg';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonIconCancel({ title, ...rest } : Props) {
  return (
    <RectButton
      style={styles.container}
      activeOpacity={.7}
      {...rest}
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}