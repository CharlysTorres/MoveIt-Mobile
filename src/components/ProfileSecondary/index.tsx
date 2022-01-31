import React, { useContext } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import LevelSvg from '../../assets/icons/level.svg';

import { styles } from './styles';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { AuthContext } from '../../contexts/AuthContext';

export function ProfileSecondary() {
  const { level, currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const { user } = useContext(AuthContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  console.log(level);

  const avatar = user.avatar.url;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: avatar }}
        style={styles.avatar}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{user.name}</Text>
        <View style={styles.containerBar}>
          <Text style={styles.experience}>0 xp</Text>
          <View style={styles.contentBar}>
            <View style={[styles.experienceBar, { width: `${percentToNextLevel}%` }]}></View>
          </View>
          <Text style={styles.experience}>{experienceToNextLevel} xp</Text>
        </View>
        <View style={styles.level}>
          <Text style={styles.text}>
            <View style={styles.icon}>
              <LevelSvg 
                width={16}
                height={16}
              />
            </View>
            level {level}
          </Text>
        </View>
      </View>
    </View>
  );
}