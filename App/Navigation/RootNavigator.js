import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeContainer from '../Modules/Home/Containers/Index';
import StateDistrictContainer from '../Modules/Home/Containers/StateDataContainer';
// import AppNavigator from './AppNavigator'; //
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import DoContainer from '../Modules/DoAndDonts.js/Containers/DoContainer';
import {Colors, Fonts, Metrics} from '../Modules/Themes';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import AboutContainer from '../Modules/About/Containers/AboutContainer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: Colors.shipOfficer}}>
        <LottieView
          source={require('../../assets/Animations/18795-coronavirus.json')}
          autoPlay
          loop
          style={{
            width: Metrics.screenWidth / 1.5,
          }}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => CustomDrawerContent(props)}
        drawerStyle={{
          width: Metrics.screenWidth / 1.5,
        }}
        drawerContentOptions={{
          labelStyle: Fonts.style.f20m,
          activeTintColor: Colors.magentaPurple,
          inactiveTintColor: 'grey',
        }}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Do's & Dont's" component={DoContainer} />
        <Drawer.Screen name="About" component={AboutContainer} />
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
