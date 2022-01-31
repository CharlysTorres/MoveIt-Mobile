import React, { useContext } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { styles } from './styles';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Desafios Completos</Text>
      </View>
      <View>
        <Text style={styles.text}>{challengesCompleted}</Text>
      </View>
    </View>
  );
}