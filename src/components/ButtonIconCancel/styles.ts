import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: colors.red,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: 32,
  },
  icon: {},
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: colors.white,
    fontFamily: fonts.text600,
  },
});