import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';

import BodySvg from '../../assets/icons/body.svg';
import EyeSvg from '../../assets/icons/eye.svg';
import LevelUpSvg from '../../assets/icons/level-up.svg';

import { ButtonFail } from '../ButtonFail';
import { ButtonSuccess } from '../ButtonSuccess';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { styles } from './styles';

export function ChallegeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <View style={styles.container}>
      { activeChallenge ? (
        <View style={styles.activeChallege}>
          <Text style={styles.header}>Ganhe {activeChallenge.amount} xp</Text>

          <View style={styles.main}>
            <View style={styles.icon}>
              { activeChallenge?.type === 'eye' ? (
                <EyeSvg 
                  width={98}
                />
              ) : (
                <BodySvg 
                  width={84}
                />
              )}
            </View>
            <Text style={styles.title}>Novo Desafio</Text>
            <Text style={styles.description}>{activeChallenge.description}</Text>
          </View>

          <View style={styles.footer}>
            <ButtonFail
              title="Falhei"
              onPress={handleChallengeFailed}
            />
            <ButtonSuccess
              title="Completei"
              onPress={handleChallengeSucceeded}
            />
          </View>
        </View>
      ) : (
        <View style={styles.challegeNotActive}>
          <Text style={styles.titleNoActive}>
            Finalize um ciclo para receber um desafio.
          </Text>
          <View style={styles.content}>
            <LevelUpSvg 
              width={48}
            />
            <Text style={styles.text}>
              Avance de level completando desafios
            </Text>
          </View>
        </View>
      )}
    </View>
  );
}