import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView, 
  TextInput, 
  Text, 
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  Keyboard,
  Alert,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { colors } from '../../global/global';
import { ButtonFragment } from '../../components/ButtonFragment';
import { AuthContext } from '../../contexts/AuthContext';
import { showToast } from '../../store/modules/toast/action';


export function SignIn() {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { handleLogin, user } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const token = AsyncStorage.getItem('@moveit:token');
      console.log("Token: ", token);      
    })()
  }, [])

  async function handleSignIn() {
    const data = {
      email, 
      password
    }
    await handleLogin(data);
    navigation.navigate('Home');
  }

  function handleSocialButton() {
    const toast = {
      message: 'Recurso será adicionado em breve.',
      type: 'default',
      iconName: 'close',
      duration: 2000,
    }

    dispatch(showToast(toast));
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <StatusBar
          barStyle="dark-content"
        />
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>Olá, Bem Vindo!</Text>
              <Text style={styles.text}>Faça seu login ou crie uma conta agora mesmo!</Text>
            </View>
            <TextInput
              style={[
                styles.inputEmail]}
              placeholder="Digite seu email"
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={[
                styles.inputPassword]}
              secureTextEntry={true}
              placeholder="Digite sua senha"
              onChangeText={setPassword}
              value={password}
            />
            <Text style={styles.recoveryPassword}>Esqueceu a senha?</Text>

            <View style={styles.footer}>
              <Button 
                title="Entrar"
                background={colors.blue}
                onPress={handleSignIn}
              />

              <View style={styles.socialTitle}>
                <Text style={styles.socialText}>Ou entre com</Text>
              </View>

              <View style={styles.social}>
                <ButtonFragment 
                  type="icon"
                  icon="twitter"
                  // square={true}
                  buttonRadius={14}
                  color={colors.blueDark}
                  size={28}
                  background={colors.white}
                  transparent={true}
                  onPress={handleSocialButton}
                />

                <ButtonFragment 
                  type="icon"
                  icon="github"
                  square={true}
                  color={colors.black}
                  size={28}
                  transparent={true}
                  background={colors.white}
                  onPress={handleSocialButton}
                />

                <ButtonFragment 
                  type="icon"
                  icon="facebook"
                  square={true}
                  color={colors.blue}
                  size={28}
                  transparent={true}
                  background={colors.white}
                  onPress={handleSocialButton}
                />
              </View>

              <View style={styles.cadastro}>
                <Text style={styles.text}>Não tem uma conta?</Text>
                <Text
                  style={styles.textInput}
                  onPress={() => {navigation.navigate('SignUp')}}
                >
                  Cadastre-se
                </Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}