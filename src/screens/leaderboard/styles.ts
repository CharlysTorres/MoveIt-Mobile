import { StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    flexDirection: 'column',
    paddingTop: getStatusBarHeight() + 26,
  },
  title: {
    fontSize: 18,
    color: colors.title,
    fontFamily: fonts.text700,
  },
  textFirst: {
    fontSize: 10,
    color: colors.text,
    fontFamily: fonts.text600,
    marginRight: 22,
  },
  text: {
    fontSize: 10,
    color: colors.text,
    fontFamily: fonts.text600,
  },
  header: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  placing: {
    marginBottom: 120,
  },
});