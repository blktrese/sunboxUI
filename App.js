import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth'

import LoginScreen from './login/LoginScreen';
import LoginError from './loginerror/LoginError';
// BELOW IS THE ALIAS DASHBOARD !!!
import DashboardScreen from './components/CoinDashBoard/DashboardScreen';
import KLoginScreen from './components/KLogin/KLoginScreen';
import { FIREBASE_AUTH } from './FirebaseConfig';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return (
    <InsideStack.Navigator>
        <InsideStack.Screen 
        name='Dashboard' 
        component={DashboardScreen} 
        options={{ headerShown: false }} 
        />
    </InsideStack.Navigator>
  )
} 

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user", user);
      setUser(user)
    })
  }, [])
  

    return (
    // <NavigationContainer>
    //   <View style={styles.appContainer}>
    //     <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    //       {/* <Stack.Screen name="Login" component={LoginScreen} />
    //       <Stack.Screen name="LoginError" component={LoginError} /> */}
    //       <Stack.Screen name="Dashboard" component={DashboardScreen} />
    //     </Stack.Navigator>
    //   </View>
    // </NavigationContainer>


 //  RE WRITE    
        <NavigationContainer>
            <View style={styles.appContainer}>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                {user ? ( 
                  <Stack.Screen name="Dashboard" component={InsideLayout} />
                ) : (                
                  <Stack.Screen name="Login" component={KLoginScreen} />
                )}
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
});
