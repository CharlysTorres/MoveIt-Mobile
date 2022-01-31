import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';
import badges from '../../../badges.json';
import { AuthContext } from '../../contexts/AuthContext';

import Challenges5 from '../../assets/icons/badges/badgechallenges5.svg';
import Challenges10 from '../../assets/icons/badges/badgechallenges10.svg';
import Challenges30 from '../../assets/icons/badges/badgechallenges30.svg';
import Challenges50 from '../../assets/icons/badges/badgechallenges50.svg';
import Challenges100 from '../../assets/icons/badges/badgechallenges100.svg';
import BadgeLevel5 from '../../assets/icons/badges/badgelevel5.svg';
import BadgeLevel10 from '../../assets/icons/badges/badgelevel10.svg';
import BadgeLevel30 from '../../assets/icons/badges/badgelevel30.svg';
import BadgeLevel50 from '../../assets/icons/badges/badgelevel50.svg';
import BadgeLevel100 from '../../assets/icons/badges/badgelevel100.svg';
import BadgeExperience5000 from '../../assets/icons/badges/badgeexperience5000.svg';
import BadgeExperience10000 from '../../assets/icons/badges/badgeexperience10000.svg';
import BadgeExperience20000 from '../../assets/icons/badges/badgeexperience20000.svg';
import BadgeCicle3 from '../../assets/icons/badges/badgecicle3.svg';
import BadgeCicle5 from '../../assets/icons/badges/badgecicle5.svg';

interface Badges {
  id: string;
  description: string;
  image: string;
}

export function Badges() {
  const { user } = useContext(AuthContext);
  const [ badgeActive, setBadgeActive ] = useState(false);
  const badge = badges;
  
  var restArray = [];
  if(user) {
    if(badge){
      const rest = 15 - badge.length;
      for(var i = 0; i < rest; i++){
        restArray.push(i); 
      }
    }
  }

  return (
    <ScrollView 
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.badgeBox}>
            {  user.level.level >= 5 ? (
              <BadgeLevel5
                width={70}
                height={70}
              />
            ) : (
                <View>
                  <Text style={styles.txt}>?</Text>
                </View>
              )
            }
          </TouchableOpacity>

          <TouchableOpacity style={styles.badgeBox}>
            {  user.level.level == 10 ? (
              <BadgeLevel10
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.badgeBox}>
            { user.level.level == 30 ? (
              <BadgeLevel30
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.badgeBox}>
            { user.level.level == 50 ? (
              <BadgeLevel50
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.badgeBox}>
            { user.level.level == 100 ? (
              <BadgeLevel100
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.badgeBox}>
            { user.level.challengesCompleted == 5 ? (
              <Challenges5
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.badgeBox}>
            { user.level.challengesCompleted == 10 ? (
              <Challenges10
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.badgeBox}>
            { user.level.challengesCompleted == 30 ? (
              <Challenges30
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.badgeBox}>
            { user.level.challengesCompleted == 50 ? (
              <Challenges50
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.badgeBox}>
            { user.level.challengesCompleted >= 100 ? (
              <Challenges100
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.badgeBox}>
            {/* <BadgeCicle3
              width={70}
              height={70}
            /> */}
            <View>
              <Text style={styles.txt}>?</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.badgeBox}>
            {/* <BadgeCicle5
              width={70}
              height={70}
            /> */}
            <View>
              <Text style={styles.txt}>?</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={styles.badgeBox}>
            { user.level.experience >= 5000 ? (
              <BadgeExperience5000
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.badgeBox}>
            { user.level.experience >= 10000 ? (
              <BadgeExperience10000
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
        <TouchableOpacity style={styles.badgeBox}>
            { user.level.experience >= 20000 ? (
              <BadgeExperience20000
                width={70}
                height={70}
              />
            ) : (
              <View>
                <Text style={styles.txt}>?</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

  );
}