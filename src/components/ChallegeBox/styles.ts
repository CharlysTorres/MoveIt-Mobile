import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginBottom: 14,
    height: 340,
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingVertical: 14,
    paddingHorizontal: 14,

    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  activeChallege: {},
  challegeNotActive: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
  titleNoActive: {
    fontSize: 22,
    color: colors.title,
    fontFamily: fonts.text600,
    textAlign: 'center',
  },
  text: {
    color: colors.text,
    textAlign: 'center',
    fontSize: 18,
  },
  header: {
    color: colors.blue,
    fontFamily: fonts.text600,
    fontSize: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLine,
    textAlign: 'center',
    // border-bottom: 1px solid var(--gray-line),
  },
  main: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.title,
    fontFamily: fonts.text600,
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    color: colors.text,
    textAlign: 'center',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 42,
    justifyContent: 'space-between',
    marginTop: 24,
  },
});