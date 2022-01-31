import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import AppRoutes from './routes';

const Routes = () => (
  <NavigationContainer>
    <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
    <AppRoutes />
  </NavigationContainer>
);

export default Routes;