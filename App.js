import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

import LoginScreen from './login/LoginScreen';
import LoginError from './loginerror/LoginError';
import Dashboard from './dashboard/ccrecord/InputDesign';
import SplashScreen from './SplashScreen';
import AboutUs from './dashboard/about-us/sunbox/AboutUs';
import Header from './dashboard/ccrecord/Header';

const Stack = createNativeStackNavigator();

// Dashboard with layout
const DashboardScreen = () => {
  return (
    <View style={styles.screenWrapper}>
      <Header />
      <View style={styles.screenContent}>
        <Dashboard />
      </View>
    </View>
  );
};

// About screen with layout
const AboutScreen = () => {
  return (
    <View style={styles.screenWrapper}>
      <Header />
      <View style={styles.screenContent}>
        <AboutUs />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="LoginError" component={LoginError} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="AboutUs" component={AboutScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#212124',
  },
  screenWrapper: {
    flex: 1,
    backgroundColor: '#212124',
  },
  screenContent: {
    flex: 1,
    padding: 24,
  },
});
