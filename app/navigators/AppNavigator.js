import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '@scenes/SplashScreen/';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '@scenes/HomeScreen';
import NavigationService from '@services/NavigationService';

const Stack = createStackNavigator();
/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
export default function AppNavigator() {
  return (
    <NavigationContainer ref={NavigationService.setTopLevelNavigator}>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
