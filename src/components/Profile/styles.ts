import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    marginLeft: 8,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 50
  },
  title: {
    fontFamily: fonts.text600,
    color: colors.title,
    fontSize: 20,
  },
  text: {
    fontFamily: fonts.text500,
    paddingLeft: 5,
  },
  level: {
    
  },
});