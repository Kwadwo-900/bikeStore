import * as React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

export default function Login() {
    return (
      <View style={{
        backgroundColor: "#f57009",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"}}>
          <Text style={{paddingBottom:"50px", fontWeight:"bold", fontSize:"30"}}>Welcome To Vintage Bikes</Text>
          <Image
        style={{
          transform: [{ rotate: "5deg" }],
          borderRadius: 20,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://image.shutterstock.com/image-photo/vintage-bicycle-on-roadside-black-600w-308760134.jpg",
        }}
      />

<TextInput 
 style={{ paddingHorizontal: 60, borderWidth : 0.5, padding:10,borderRadius:10, paddingTop:10}} placeholder="Enter username or email"/>
 <Text>     </Text>

 <TextInput 
 style={{ paddingHorizontal: 60, borderWidth : 0.5, padding:10,borderRadius:10, }} placeholder="password"/>


 <TouchableOpacity 
    style={{
        padding: 15,
        paddingHorizontal: 80,
        marginTop: 10,
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: "white",
      }}
 >
     <FontAwesome name="google" size={24} color="black" />
     <Text style={{ paddingLeft: 10, color: "black" }}>Continue with google</Text>
      
     
 </TouchableOpacity>

<TouchableOpacity
       /* onPress={() => {
          navigation.navigate("Home");
        }}
        */
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "black",
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ paddingLeft: 10, color: "white" }}>Login with AppleID</Text>
      </TouchableOpacity>


      </View>
    );
  }

  