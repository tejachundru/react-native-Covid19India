import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {BackHandler} from 'react-native';
import Splash from '../Modules/Splash/Splash';
import HomeContainer from '../Modules/Home/Containers/Index';
import StateDistrictContainer from '../Modules/Home/Containers/StateDataContainer';
// import AppNavigator from './AppNavigator'; //
import {createDrawerNavigator} from '@react-navigation/drawer';
import DoContainer from '../Modules/DoAndDonts.js/Containers/DoContainer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeDrawer">
        <Drawer.Screen name="HomeDrawer" component={HomeNavigator} />
        <Drawer.Screen name="Do & Dont's" component={DoContainer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function HomeNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeContainer} />
      <Stack.Screen name="District" component={StateDistrictContainer} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
