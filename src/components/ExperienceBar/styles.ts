import { StyleSheet } from 'react-native';

import { colors } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.grayLine,
    marginRight: 10,
    marginLeft: 10,
    position: 'relative',
  },
  experience: {
    fontSize: 14,
  },
  experienceBar: {
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.green,
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
  arrowExperience: {
    width: 12,
    height: 12,
    marginLeft: '50%',
    marginRight: 'auto',
    padding: 1,
    position: 'absolute',
    top: -6,
    left: 0,
    right: 0,
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
    backgroundColor: colors.white,
  },
});