import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation, useRoute } from '@react-navigation/core';
import LottieView from 'lottie-react-native';

import workingAnimation from '../../assets/working.json';
import studyingAnimation from '../../assets/studying.json';
import programingAnimation from '../../assets/programing.json';

import { styles } from './styles';

interface DotsProps {
  selected: boolean;
}

const Dots = ({selected}: DotsProps) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View 
      style={{
        width:6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor
      }}
    />
  );
}

const Skip = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
    style={{marginHorizontal:10}}
    {...props}
  >
    <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);

export function Onboard() {
  const navigation = useNavigation();
  const routes = useRoute();

  function handleLogin() {
    navigation.navigate('SignIn');
  }

  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={handleLogin}
      onDone={handleLogin}
      pages={[
        {
          backgroundColor: '#fff',
          image: <LottieView source={studyingAnimation} autoPlay loop style={styles.animation} />,
          title: 'Melhore os estudos',
          subtitle: 'Estude e tenha melhores resultados, consiga absorver melhor todo o conteúdo.',
        },
        {
          backgroundColor: '#fff',
          image: <LottieView source={workingAnimation} autoPlay loop style={styles.animation} />,
          title: 'Trabalhe com mais foco',
          subtitle: 'Consiga ter resultados melhores, mais foco e com menos danos por ficar horas na frente do computador.',
        },
        {
          backgroundColor: '#fff',
          image: <LottieView source={programingAnimation} autoPlay loop style={styles.animation} />,
          title: 'Leitura',
          subtitle: 'Passe bons minutos lendo sem cançar muito a mente corpo e olhos praticando nossos exercicios',
        },
      ]}
    />
  );
}