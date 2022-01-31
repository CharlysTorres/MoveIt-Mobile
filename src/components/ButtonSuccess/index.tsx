import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text } from 'react-native';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonSuccess({ title, ...rest } : Props) {
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