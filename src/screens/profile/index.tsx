import React, { useContext } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { SvgFromUri, SvgUri } from 'react-native-svg';

import { ProfileSecondary } from '../../components/ProfileSecondary';
import { ButtonFragment } from '../../components/ButtonFragment';
import { AuthContext } from '../../contexts/AuthContext';
import { Badges } from '../../components/Badges';

import { styles } from './styles';

export function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.settingsButton}>
        <ButtonFragment
          type="icon"
          size={24}
          buttonRadius={16}
          icon="settings"
          sizeButton={{width: 24, height: 24}}
        />
      </View>
      <View style={styles.content}>
        <ProfileSecondary />
        <View style={styles.wrapperQuest}>
          <View style={styles.conquist}>
            <Text style={styles.text}>Conquistas</Text>
          </View>
          <View style={styles.badges}>
            <Text style={styles.badgesCompleted}>4</Text>
            <Text style={styles.text}>de 15 completados</Text>
          </View>
        </View>
      </View>
      <View style={styles.badgesContainer}>
        <Badges />
      </View>
      <SvgFromUri 
        uri="../../assets/icon/level.svg"
        width={24}
        height={24}
      />
    </View>
  );
}