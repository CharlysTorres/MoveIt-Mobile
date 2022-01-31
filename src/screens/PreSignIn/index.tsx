import React from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';
import { colors } from '../../global/global';
import { ButtonFragment } from '../../components/ButtonFragment';

export function PreSignIn() {
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('SignIn');
  }

  return (
    <ImageBackground
      source={require('../../assets/girl.png')}
      style={styles.img}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Tudo pronto para começar?
          </Text>
          <View>
            <Text style={styles.text}>
              Entre ou crie uma conta agora mesmo e comece seus ciclos
            </Text>
          </View>
          <ButtonFragment
            type="text"
            title="Go"
            background="#48c8fe"
            buttonRadius={26}
            sizeButton={{width: 52, height: 52}}
            onPress={handleLogin}
          />
        </View>
      </View>
    </ImageBackground>
  );
}