import { StyleSheet } from 'react-native';
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
  content: {
    
  },
  wrapperQuest: {
    marginTop: 80,
    flexDirection: 'row',
    alignContent: 'center',
  },
  wrapperText: {
    alignItems: 'center',
  },
  conquist: {
    
  },
  badges: {
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'row',
  },
  badgesCompleted: {
    color: colors.blue,
    fontFamily: fonts.text600,
    marginRight: 5,
  },
  badgesContainer: {
    marginTop: 20,
  },
  text: {
    color: colors.text
  },
  settingsButton: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
    top: 54,
    // backgroundColor: colors.red,
  },
});