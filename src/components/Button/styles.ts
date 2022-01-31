import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
  width: '100%',
  height: 56,
  backgroundColor: colors.red,
  borderRadius: 8,
  flexDirection: 'row',
  alignItems: 'center',
},
iconWrapper: {
  width: 56,
  height: 56,
  justifyContent: 'center',
  alignItems: 'center',
  borderRightWidth: 1,
},
icon: {
  width: 24,
  height: 18,
},
title: {
  flex: 1,
  color: colors.white,
  fontSize: 18,
  textAlign: 'center',
  fontFamily: fonts.title700,
},
});