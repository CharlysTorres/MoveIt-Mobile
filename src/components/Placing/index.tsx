import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import { api } from '../../services/api';
import LevelSvg from '../../assets/icons/level.svg';

import { styles } from './styles';

interface PlacingProps {
  name: string;
  avatar: string;
  level: number;
  experience: number;
  challengesCompleted: number;
  position: number;
}

export function Placing({avatar, name, level, experience, challengesCompleted, position}: PlacingProps) {
  
  return (
    <View style={styles.container}>
      <View style={styles.position}>
        <Text style={styles.textPosition}>{ position }</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <View style={styles.userInfo}>
            <Image style={styles.avatar} source={{uri: avatar}} />
            <View style={styles.userData}>
              <Text style={styles.userName}>{name}</Text>
              <View style={styles.wrapperLevel}>
                <LevelSvg
                  width={8}
                />
                <Text style={styles.textLevel}>Level {level}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.wrapperChallenges}>
          <View style={styles.challenges}>
            <Text style={styles.textColor}>{challengesCompleted}</Text>
            <Text style={styles.text}>Completados</Text>
          </View>
          <View style={styles.challenges}>
            <Text style={styles.textColor}>{experience}</Text>
            <Text style={styles.text}>xp</Text>
          </View>
        </View>
      </View>
    </View>
  );
}