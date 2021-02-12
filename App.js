/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Container, Body, Title} from 'native-base';
import App from './component/splashScreen';
import Welcome from './component/WelcomeScreen';
import LoginScreen from './component/Login';
import Adminlogin from './component/Adminlogin';
import Memberlogin from './component/Memberlogin';
import Register from './component/Register';
import Register1 from './component/Register1';
import General from './component/General';
import MyServices from './component/MyServices';
import Notification from './component/Notification';
import AboutUs from './component/AboutUs';
import Announcements from './component/Announcements';
import DonateUs from './component/DonateUs';
import Performance from './component/Performance';
import Leave  from './component/Leave';
import Organization  from './component/Organization';
import Timesheet  from './component/Timesheet';
import Attendance  from './component/Attendance';
import Files  from './component/Files';
import OurServices from './component/OurServices';
import Settings from './component/Settings';
import Update_Profile from './component/Update_Profile';
import Nav from './component/navigator/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={App}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Adminlogin"
          component={Adminlogin}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Memberlogin"
          component={Memberlogin}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Register1"
          component={Register1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="General"
          component={General}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Nav"
          component={Nav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Performance"
          component={Performance}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Leave"
          component={Leave}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Organization"
          component={Organization}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Timesheet"
          component={Timesheet}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Attendance"
          component={Attendance}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="Files"
          component={Files}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Announcements"
          component={Announcements}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DonateUs"
          component={DonateUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OurServices"
          component={OurServices}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Update_Profile"
          component={Update_Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default MainApp;
