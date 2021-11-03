import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/login.js";
import Home from "./screens/home";
import landing_page from "./screens/landing_page";
import sign_up from "./screens/sign_up_page";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer screenOptions={{ headerShown:true }}>
        <Stack.Navigator>
          <Stack.Screen name = "landing_page" component={landing_page} options={{title:"WELCOME"}}/>
          <Stack.Screen name="Login" component={Login} options={{title:"LOGIN"}}/>
          <Stack.Screen name="Sign_up" component={sign_up} options={{title:"SIGN UP"}}/>
          <Stack.Screen name="Home" component={Home} 
          options={{title:"SELECT BIKE",
        headerLeft:({onPress}) => {
          <TouchableOpacity 
          style={{marginLeft: SIZE.padding}} onPress={onPress}>
            <Ionicons name="md-menu-sharp" size={24} color="black" />
            //<Image source={{uri:""}}/>

          </TouchableOpacity>
        },
        headerRight:() => {
          <TouchableOpacity 
          style={{marginRight: SIZE.padding}}
          onPress={()=> console.log("Header right Pressed")}
          >
            <AntDesign name="search1" size={24} color="black" />

          </TouchableOpacity>
        }


        }} />
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
