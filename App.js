import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './login/LoginScreen';
import LoginError from './loginerror/LoginError';
import Dashboard from './dashboard/ccrecord/InputDesign';
import SplashScreen from './SplashScreen';
import { View, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="LoginError" component={LoginError} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="AboutUs" component={AboutScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#212124",
  },
      mainContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
});
