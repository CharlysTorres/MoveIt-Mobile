import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  countdown: {
    marginBottom: 140,
  },
  container: {
    alignItems: 'center',
    fontFamily: fonts.title500,
    fontWeight: '600',
    flexDirection: 'row',
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: colors.white,

    flexDirection: 'row',

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,

    borderRadius: 3,
    textAlign: 'center',
    alignItems: 'center',
    // height: 100,
    // width: 70,
  },
  minuteLeft: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#F0F1F3',
  },
  minuteRigth: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#F0F1F3',
  },
  separator: {},
  textMinute: {
    fontSize: 78,
    color: colors.title,
    fontFamily: fonts.title600,
  },
  secondLeft: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#F0F1F3',
  },
  secondRight: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#F0F1F3',
  },
  button: {
    marginTop: 22,
  },
});