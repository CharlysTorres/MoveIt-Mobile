import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
  background?: string;
}

export function Button({ title, background, ...rest } : Props) {
  return (
    <RectButton
      style={[styles.container, {backgroundColor: background}]}
      activeOpacity={.7}
      {...rest}
    >
      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}