import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    marginTop: getStatusBarHeight() + 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    position: "absolute",
    top: 0,
  },
  content: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: fonts.text700,
    color: colors.title,
    marginLeft: 2,
    paddingHorizontal: 8,
  },
});