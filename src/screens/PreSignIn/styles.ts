import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: 24,
    // marginRight: 24,
    flexDirection: 'column',
    paddingTop: getStatusBarHeight() + 26,
  },
  content: {
    bottom: 0,
    padding: 20,
    height: 200,
    position: 'absolute',
    alignItems: 'center',
    borderTopEndRadius: 45,
    justifyContent: 'center',
    borderTopStartRadius: 45,
    backgroundColor: colors.white,
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontFamily: fonts.text700,
    textAlign: 'center',
    color: colors.title,
    fontSize: 18,
    marginBottom: 16,
  },
  text: {
    textAlign: 'center',
    color: colors.text,
    fontFamily: fonts.text500,
    marginBottom: 16,
  },
});