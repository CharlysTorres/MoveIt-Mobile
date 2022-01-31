import React from 'react';
import { Text }from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

import { colors } from '../../global/global';
import { styles } from './styles';

type Props = RectButtonProps & {
  title?: string;
  square?: boolean;
  transparent?: boolean;
  background?: string;
  setBackground?: boolean;
  icon?: 'chrome' | 'facebook' | 'github' | 'twitter' | 'camera' | 'settings' | 'x';
  type?: 'text' | 'icon';
  color?: string;
  size?: number;
  sizeButton?: {
    width?: number;
    height?: number;
  };
  buttonRadius?: number;
}

export function ButtonFragment({ 
  icon, 
  type,
  size,
  color,
  title, 
  background,
  square = false, 
  transparent = false,
  setBackground = true,
  sizeButton,
  buttonRadius,
  ...rest 
} : Props) {
  return (
    <RectButton
      style={[
        styles.container, 
        square && styles.square,
        setBackground && {backgroundColor: background},
        transparent && styles.transparent, 
        { 
          width: sizeButton?.width, height: sizeButton?.height,
          borderRadius: buttonRadius 
        }
      ]}
      activeOpacity={.7}
      {...rest}
    >
      { type === 'text' ? (
        <Text style={[styles.title, transparent && styles.textDark]}>
          { title }
        </Text>
      ) : (
        <Feather 
        name={icon}
        color={color}
        size={size}
      />
      )}
    </RectButton>
  );
}