import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  Animated,
  TouchableOpacity,
} from 'react-native';

import { styles } from './styles';
import { colors } from '../../global/global';
import LevelUp from '../../assets/icons/levelup.svg';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ButtonFragment } from '../ButtonFragment';
import { ButtonSuccess } from '../ButtonSuccess';

export function LevelUpModal() {
  const { level, closeLevelUpModal, isLevelModalOpen } = useContext(ChallengesContext);
  const scaleValue = React.useRef(new Animated.Value(0)).current;

  function closeModal() {
    console.log('closeLevelUpModal');
    // closeLevelUpModal();
    // setShowModal(false);
  }

  return (
    <Modal
      transparent
      visible={isLevelModalOpen}
    >
      <View style={styles.overlay}>
        <Animated.View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.background}>
              <LevelUp 
                width={200}
                height={200}
              />
            </View>
            <Text style={styles.level}>{level}</Text>
          </View>

          <View>
            <Text style={styles.title}>
              Parabéns
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              Você alcançou um novo level!
            </Text>
          </View>

          <View style={styles.button}>
            {/* <ButtonFragment
              type="icon"
              icon="x"
              size={24}
              color={colors.text}
              transparent={true}
              onPress={() => console.log('Clicked')}
            /> */}
            <TouchableOpacity onPress={() => closeLevelUpModal()}>
              {/* <Image
                source={require('../../assets/icons/x.png')}
                style={{height: 30, width: 30}}
              /> */}
              <ButtonFragment
              type="icon"
              icon="x"
              size={24}
              color={colors.text}
              transparent={true}
              onPress={() => closeLevelUpModal()}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
    
  );
}