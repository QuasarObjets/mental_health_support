// File: /mental_health_support/mobile/src/App.tsx

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SupportGroupScreen from './screens/SupportGroupScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SupportGroup" component={SupportGroupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
