import React, { useContext } from 'react';
import {
  View,
  Text
} from 'react-native';

import { styles } from './styles';

import { ChallengesContext } from '../../contexts/ChallengesContext';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <View style={styles.container}>
      <Text style={styles.experience}>0 xp</Text>
      <View style={styles.content}>
        <View style={[styles.experienceBar, { width: `${percentToNextLevel}%` }]}></View>
        <View style={[styles.currentExperience, { left: `${percentToNextLevel}%` }]}>
          <View style={styles.arrowExperience}></View>
          <Text>{currentExperience} xp</Text>
        </View>
      </View>
      <Text>{experienceToNextLevel} xp</Text>
    </View>
  );
}