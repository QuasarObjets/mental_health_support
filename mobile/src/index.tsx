// File: /mental_health_support/mobile/src/index.tsx

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

// Register the app component as the root component
AppRegistry.registerComponent('mental_health_support', () => App);

// Start the app
AppRegistry.runApplication('mental_health_support', {
  rootTag: document.getElementById('root'),
});
