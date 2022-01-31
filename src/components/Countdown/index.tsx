import React, { useContext } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { ButtonIcon } from '../ButtonIcon';
import { ButtonIconCancel } from '../ButtonIconCancel';
import { ButtonFinished } from '../ButtonFinished';

import {CountdownContext} from '../../contexts/CountdownContext';

import { styles } from './styles';

export function Countdown() {
  const {
    minutes,
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <View style={styles.countdown}>
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.minuteLeft}>
            <Text style={styles.textMinute}>
              { minuteLeft }
            </Text>
          </View>
          <View style={styles.minuteRigth}>
            <Text style={styles.textMinute}>
              { minuteRight }
            </Text>
          </View>
        </View>

        <View>
          <Text style={styles.textMinute}>:</Text>
        </View>

        <View style={styles.contentWrapper}>
          <View style={styles.secondLeft}>
            <Text style={styles.textMinute}>
              { secondLeft }
            </Text>
          </View>
          <View style={styles.secondRight}>
            <Text style={styles.textMinute}>
              { secondRight }
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.button}>
        { hasFinished ? (
          <ButtonFinished
            enabled={false}
            title="Ciclo Concluido"
          />
        ) : (
          <>
            {isActive ? (
              <ButtonIconCancel 
                title="Abandonar ciclo"
                onPress={resetCountdown}
              />
            ) : (
              <ButtonIcon 
                title="Iniciar ciclo"
                onPress={startCountdown}
              />
            )
            }
          </>
        )
        }
      </View>
    </View>
  );
}