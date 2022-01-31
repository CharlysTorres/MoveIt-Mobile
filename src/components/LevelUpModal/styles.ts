import { StyleSheet, ImageBackground } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    // position: 'relative',
    width: '90%',
    maxWidth: 450,
    height: 250,
    zIndex: 40,

    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    backgroundColor: colors.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
  header: {},
  level: {
    fontSize: 100,
    color: colors.blue,
    textAlign: 'center',
    fontFamily: fonts.text600,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.text600,
    color: colors.title,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    top: 10,
    right: 10,
    position: 'absolute',
  },
  background: {
    position: 'absolute',
    top: -45,
    flex: 1,
    left: -68,
  },
});