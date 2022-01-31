import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { Countdown } from '../../components/Countdown';
import { ChallegeBox } from '../../components/ChallegeBox';
import { ExperienceBar } from '../../components/ExperienceBar';
import { CompletedChallenges } from '../../components/CompletedChallenges';

export function Home() {
  return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
            <ExperienceBar />
          <View style={styles.section}>
              <View style={styles.content}>
                <Profile />
                <CompletedChallenges />
                <ChallegeBox />
                <Countdown />
              </View>
              <View></View>
          </View>
        </View>
      </ScrollView>
  );
}