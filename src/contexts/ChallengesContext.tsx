import React, { 
  createContext, 
  ReactNode, 
  useEffect,
  useState,
  useContext,
  useRef,
} from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';

import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';
import { AuthContext, User } from './AuthContext';
import { api } from '../services/api';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge | null;
    experienceToNextLevel: number;
    isLevelModalOpen: boolean;
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    experience: number;
    currentExperience: number;
    challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
  const [ experience, setExperience ] = useState(rest.experience ?? 0);
  const [ userLogged, setUserLogged ] = useState<User>();
  const { user } = useContext(AuthContext);

  const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
  const challenge = challenges[randomChallengeIndex];

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [ isLevelModalOpen, setIsLevelModalOpen ] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

  }, [])

  useEffect(() => {
    (async () => {
      // await api.get(`/users/${user.id}`).then(response => {
      //   setUserLogged(response.data);
      //   console.log(userLogged);
      // })
      setLevel(user.level.level);
      setCurrentExperience(user.level.currentExperience);
      setChallengesCompleted(user.level.challengesCompleted);
      setExperience(user.level.experience);
    })()
  }, [user]);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  async function levelUp() {
    setLevel(level + 1);
    setIsLevelModalOpen(true);
  }

  function closeLevelUpModal() {
      setIsLevelModalOpen(false);
  }

  async function startNewChallenge() {
    
    setActiveChallenge(challenge);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: `Valendo ${challenge.amount} xp!`,
        body: 'O tempo acabou e está na hora de parar um pouco e comprir mais um desafio! 🏆',
        subtitle: 'Novo desafio',
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: {},
        vibrate: [200, 1000, 500, 1000, 500],
      },
      trigger: { seconds: 2 },
    });
  }

  function resetChallenge() {
      setActiveChallenge(null);
  }

  async function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    
    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      
      updateLevel();
      levelUp();
    }
    
    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  async function updateLevel() {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    setLevel(level + 1);
    setChallengesCompleted(challengesCompleted + 1);
    setExperience(experience + amount);
    const data = {
      level: level + 1,
      experience: experience + amount,
      currentExperience,
      challengesCompleted: challengesCompleted + 1,
    }
    console.log(data);
    console.log("EXPERIENCE: ", experience);
    try {
      await api.put(`/level/${user.id}`, data);
    } catch (err) {
      console.error('Aconteceu algo inesperado e não foi possivel subir de level.')
    }
  }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        closeLevelUpModal,
        isLevelModalOpen
        }}
    >
      {children}

      { isLevelModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  );
}
