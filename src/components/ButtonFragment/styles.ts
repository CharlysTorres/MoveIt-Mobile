import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: '#48c8fe',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
  title: {
    color: colors.white,
    fontFamily: fonts.title600,
    fontSize: 18,
  },
  textDark: {
    color: colors.black,
  },
  icon: {},
  square: {
    borderRadius: 10,
  },
  transparent: {
    borderWidth: 5,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
});