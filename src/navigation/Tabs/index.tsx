import React, { ReactNode } from 'react';
import {
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../../screens/Home';
import { ProfilePage } from '../../screens/profile';
import { Leaderboard } from '../../screens/leaderboard';

import AwardSvg from '../../assets/icons/award.svg';
import UserSvg from '../../assets/icons/user.svg';

import { styles } from './styles'
import { ButtomHome } from '../../components/ButtomHome';

interface CustomTabBarButtomProps {
  children: ReactNode;
  onPressHome: () => void;
}

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          left: 12,
          right: 12,
          // elevation: 0,
          backgroundColor: '#FFF',
          borderRadius: 15,
          height: 70,
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen name="Profile" component={ProfilePage} options={{
        tabBarIcon: ({ focused, size, color }) => (
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <UserSvg 
              width={size}
              height={size}
            />
          </View>
        )
      }}
      />

      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <ButtomHome size={size} focused={focused} />
          ),
        }}
      />

      <Tab.Screen name="Leaderboard" component={Leaderboard} options={{
        tabBarIcon: ({ focused, size, color }) => (
          <View style={{alignItems: 'center', justifyContent: 'center',}}>
            <AwardSvg 
              width={size}
              height={size}
            />
          </View>
        )
      }}
      />
    </Tab.Navigator>
  );
}
