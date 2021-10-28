import * as React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

export default function Login({navigation}) {
    return (
      <View style={{
        backgroundColor: "#dfddfd",
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
          boxShadow:"1px 2px 3px #888888"
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

 <TouchableOpacity onPress={() => {
      navigation.navigate("Home");
    }}
    
   style={{backgroundColor:"#13b075", border:1, padding:10,marginTop:10,paddingHorizontal:60,
      borderRadius:10, boxShadow:"1px 2px 3px #888888"
   ,}}>
 
   <Text style={{padding:10,color:"black"}}>Login</Text>
 </TouchableOpacity>
 </View>
    );
  }

  

  