import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import LevelSvg from '../../assets/icons/level.svg';

import { styles } from './styles';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { AuthContext } from '../../contexts/AuthContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { user } = useContext(AuthContext);

  const avatar = user.avatar.url;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: avatar }}
        style={styles.avatar}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{user.name}</Text>
        <View style={styles.level}>
          <Text style={styles.text}>
            <LevelSvg 
              width={16}
              height={16}
            />
            level {level}
          </Text>
        </View>
      </View>
    </View>
  );
}