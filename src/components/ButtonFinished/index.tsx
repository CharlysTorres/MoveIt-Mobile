import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

import VerifiedSvg from '../../assets/icons/verified.svg';
import { styles } from './styles';

type Props = RectButtonProps & {
  title: string;
}

export function ButtonFinished({ title, ...rest } : Props) {
  return (
    <RectButton
      style={styles.container}
      activeOpacity={.7}
      {...rest}
    >
      <Text style={styles.title}>
        { title }
        <View style={styles.iconWrapper}>
          <VerifiedSvg 
            width={32}
          />
        </View>
      </Text>
    </RectButton>
  );
}