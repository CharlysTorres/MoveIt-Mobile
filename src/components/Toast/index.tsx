import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Platform,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import { hideToast } from '../../store/modules/toast/action';
import { colors } from '../../global/global';
import { styles } from './styles';

let timer: NodeJS.Timeout;

export function Toast() {
  const [ position, setPosition] = useState(new Animated.Value(- (getStatusBarHeight() + 70)));
  const dispatch = useDispatch();
  const toastfy = useSelector(state => state.toast);

  useEffect(() => {
    toastfy.show && show();
  }, [toastfy]);

  function show() {
    clearTimeout(timer);
    Animated.timing(position, {
      toValue: 0,
      useNativeDriver: true,
      duration: 700,
      easing: Easing.linear
    }).start();
    timer = setTimeout(() => {
      hide();
    }, toastfy.duration)
  }

  function hide() {
    Animated.timing(position, {
      toValue: - (getStatusBarHeight() + 70),
      useNativeDriver: true,
      duration: 700,
      easing: Easing.linear
    }).start(() => {
      dispatch(hideToast());
    });
  }

  const zIndex = (value: number) => {
    return Platform.select({
      ios: { zIndex: value },
      android: { elevation: value }
    })
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.content, 
            { transform: [{translateY: position}], 
            }]}
            >
          <MaterialCommunityIcons
            name={toastfy.iconName}
            size={18}
            color={toastfy.iconName === 'close' ? colors.red :  colors.green}
          />
          <Text style={styles.text}>{toastfy?.message}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}