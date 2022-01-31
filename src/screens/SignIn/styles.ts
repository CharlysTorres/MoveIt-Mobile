import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: fonts.title600,
    color: colors.title,
    textAlign: 'center',
    fontSize: 22,
  },
  text: {
    fontFamily: fonts.text500,
    color: colors.text,
    textAlign: 'center',
    fontSize: 15,
  },
  inputEmail: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    width: 380,
    maxWidth: '100%',
    height: 50,
    marginTop: 50,
    borderRadius: 15,
    color: colors.title,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
  inputPassword: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    width: '100%',
    maxWidth: '100%',
    height: 50,
    marginTop: 20,
    borderRadius: 15,
    color: colors.title,
    backgroundColor: colors.white,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
  },
  recoveryPassword: {
    right: 0,
    marginTop: 20,
    // paddingLeft: 200,
    color: colors.text,
  },
  footer: {
    marginTop: 20,
  },
  socialText: {
    textAlign: 'center',
    marginTop: 20,
  },
  socialTitle: {
    marginTop: 15,
  },
  social: {
    marginTop: 40,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cadastro: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    marginLeft: 5,
    fontFamily: fonts.text600,
    fontSize: 15,
  },
});