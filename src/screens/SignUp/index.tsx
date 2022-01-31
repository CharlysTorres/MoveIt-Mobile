import React, { useState, useEffect, useContext } from 'react';
import {
  SafeAreaView, 
  TextInput, 
  Text, 
  Image,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch } from 'react-redux';

import { showToast } from '../../store/modules/toast/action';
import { styles } from './styles';
import { Button } from '../../components/Button';
import { colors, fonts } from '../../global/global';
import { ButtonFragment } from '../../components/ButtonFragment';
import { AuthContext } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export function SignUp() {
  const { handleCreateUser } = useContext(AuthContext);
  const [ avatar, setAvatar ] = useState('');
  const [ isAvatar, setIsAvatar ] = useState(false);
  const [ name, setName] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Desculpe, nós precisamos da permissão para poder continuar!');
        }
      }
    })();
  }, []);

  const pickAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log('RESULTADO: ',result);

    // if (result.cancelled) {
    //   return;
    // }

    if (!result.cancelled) {
      setAvatar(result.uri);
      setIsAvatar(true);
    }
  };

  async function handleSubmit() {
    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('avatar', {
      name: name,
      uri: avatar,
      type: 'image/jpg' || 'image/png',
    } as any);

    // console.log("HandleSubmit: ",avatar);
    console.log({
      name,
      email,
      password,
      avatar
    });

    try {
      api.post('/users', data)
      const toast = {
        message: 'Usuário criado com sucesso! ',
        iconName: 'check',
        type: 'success',
        duration: 1500
      }
      dispatch(showToast(toast));
      navigation.navigate('SignIn');
    } catch(error) {
      const toast = {
        message: 'Algo deu errado tente novamente',
        iconName: 'close',
        type: 'error',
        duration: 1500
      }
      dispatch(showToast(toast));
    }
    
    // handleCreateUser(data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <View style={styles.containerAvatar}>
              <View style={styles.img}>
                { isAvatar === false ? (
                  <ButtonFragment 
                  type="icon"
                  icon="camera"
                  color={colors.gray}
                  size={30}
                  sizeButton={{ width: 100, height: 100 }}
                  buttonRadius={50}
                  onPress={pickAvatar}
                />
                ) : (
                  <Image 
                  style={styles.backgroundImg} 
                  resizeMode='cover' 
                  source={{ uri: avatar}} />
                )}
                
              </View>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.inputName}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.inputEmail}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.inputPassword}
                secureTextEntry={true}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <View style={styles.footer}>
              <Button 
                background={colors.blue}
                title="Criar conta"
                onPress={handleSubmit}
              />

              <View style={styles.cadastro}>
                <Text style={styles.text}>Já tem uma conta?</Text>
                <Text
                  style={styles.textInput}
                  onPress={() => {navigation.navigate('SignIn')}}
                >Entrar</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}