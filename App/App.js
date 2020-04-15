/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import RootNavigator from './Navigation/RootNavigator';

const App = () => {
  console.disableYellowBox = true;
  return <RootNavigator />;
};

export default App;
