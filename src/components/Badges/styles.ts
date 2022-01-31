import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 20,
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  badgeBox: {
    width: 130,
    height: 130,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  scrollContainer: {
    marginBottom: 210,
  },
  txt: {
    fontSize: 25,
    color: colors.text,
    fontFamily: fonts.text500,
  },
});