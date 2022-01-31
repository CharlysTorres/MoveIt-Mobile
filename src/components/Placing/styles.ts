import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  position: {
    width: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  wrapper: {
    borderLeftWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderColor: colors.background,
  },
  userInfo: {
    flexDirection: 'row',
    marginLeft: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userData: {
    marginLeft: 8,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17,
  },
  textPosition: {
    fontFamily: fonts.title700,
    fontSize: 18,
  },
  wrapperLevel: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textLevel: {
    marginLeft: 3,
    fontSize: 10,
    fontFamily: fonts.text400,
  },
  userName: {
    fontSize: 12,
    fontFamily: fonts.text600,
  },
  wrapperChallenges: {
    flexDirection: 'row',
  },
  challenges: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    right: 8,
  },
  textColor: {
    color: colors.blue,
    fontFamily: fonts.text700,
    fontSize: 10,
    marginRight: 3,
  },
  text: {
    fontFamily: fonts.text500,
    fontSize: 10,
  },
});