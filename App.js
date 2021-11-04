import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import one from './scr/1'
import two from './scr/2'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="one" component={one}/>
        <Stack.Screen name="two" component={two}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


