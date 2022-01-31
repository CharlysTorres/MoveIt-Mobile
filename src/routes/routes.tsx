import React from 'react';
import { createStackNavigator, Header } from '@react-navigation/stack';

import { Tabs } from '../navigation/Tabs'
import { PreSignIn } from '../screens/PreSignIn';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Onboard } from '../screens/Onboard';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Onboard"}
    >
      <Stack.Screen 
        name="Home"
        component={Tabs}
      />

      <Stack.Screen 
        name="Profile"
        component={Tabs}
      />

      <Stack.Screen 
        name="Leaderboard"
        component={Tabs}
      />

      <Stack.Screen 
        name="PreSignIn"
        component={PreSignIn}
      />

      <Stack.Screen 
        name="SignIn"
        component={SignIn}
      />

      <Stack.Screen 
        name="SignUp"
        component={SignUp}
      />

      <Stack.Screen 
        name="Onboard"
        component={Onboard}
      />
    </Stack.Navigator>
)

export default AppRoutes;