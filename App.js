import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/login.js";
import Home from "./screens/home";


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer screenOptions={{ headerShown: true ,  }}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfd',
    justifyContent: 'center',
  },
});
