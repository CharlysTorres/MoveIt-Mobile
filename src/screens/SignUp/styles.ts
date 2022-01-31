import { StyleSheet } from 'react-native';

import { colors, fonts } from '../../global/global';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  containerAvatar: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  backgroundImg: {
    width: 98,
    height: 98,
    borderRadius: 49,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 50,

    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
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
  form: {
    width: 320,
    maxWidth: '100%',
  },
  inputName: {
    width: '100%',
    height: 50,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 15,
    color: colors.title,
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  inputEmail: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
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
  inputPassword: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
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
  signIn: {
    // alignText: 'center',
    marginTop: 20,
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