import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import * as React from 'react';
import {NavigationContainer}   from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import Discover from './screen/Discover';
export default function App() {

const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='Discover' component={Discover}/>
      </Stack.Navigator>
      <StatusBar style='dark' hidden={false} />
      </NavigationContainer>

  );
}
