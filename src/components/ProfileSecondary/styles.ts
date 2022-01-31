import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
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
    paddingLeft: 0,
  },
  level: {
    marginTop: 3,
  },
  icon: {
    paddingRight: 5,
  },
  containerBar: {
    height: 15,
    flexDirection: 'row',
  },
  contentBar: {
    width: 190,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.grayLine,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 15,
    marginTop: 5,
    position: 'relative',
  },
  experienceBar: {
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.green,
  },
  experience: {
    fontSize: 10,
  },
  currentExperience: {
    position: 'absolute',
    top: 12,
    padding: 5,
    backgroundColor: colors.white,
    opacity: 0.9,
    borderRadius: 5,
    transform: [{ translateX: -20}],
  },
});