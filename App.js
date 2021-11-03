import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./screens/login.js";
import Home from "./screens/home";
import landing_page from "./screens/landing_page";
import sign_up from "./screens/sign_up_page";




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
           onPress={onPress}>
            <Image 
            source={require('./assets/icons/menu.png')}
            style={{width:25,
              height:25,resizeMode:'contain'}}/>
          </TouchableOpacity>
        },
        headerRight:() => {
          <TouchableOpacity 
          style={{marginRight:1, padding:5}}
          onPress={()=> console.log("Header right Pressed")}
          >
            

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
