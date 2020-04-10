import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {BackHandler} from 'react-native';
import Splash from '../Modules/Splash/Splash';
import HomeContainer from '../Modules/Home/Containers/Index';
// import AppNavigator from './AppNavigator'; //

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
