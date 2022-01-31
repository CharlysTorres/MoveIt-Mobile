import React from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { Rajdhani_500Medium, Rajdhani_600SemiBold, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';

import Routes from './src/routes/';
import { ChallengesProvider } from './src/contexts/ChallengesContext';
import { CountdownProvider } from './src/contexts/CountdownContext';
import { AuthProvider } from './src/contexts/AuthContext';
import Store from './src/store/index';
import { Toast } from './src/components/Toast';

interface AppProps {
  level: number;
  experience: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function App(props: AppProps) {

  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Rajdhani_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <Provider store={Store}>
      <AuthProvider>
        <ChallengesProvider
          level={props.level}
          currentExperience={props.currentExperience}
          experience={props.experience}
          challengesCompleted={props.challengesCompleted}
        >
          <CountdownProvider>
            <Routes />
            <Toast />
          </CountdownProvider>
        </ChallengesProvider>
      </AuthProvider>
    </Provider>
  );
}
