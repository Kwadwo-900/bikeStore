import * as React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import { AntDesign } from "@expo/vector-icons";


export default function Login({navigation}) {
    return (
      <View style={{
        backgroundColor: "#dfddfd",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"}}>
          <Text style={styles.text}>Sign in to continue</Text>
          <AntDesign name="down" size={24} color="black" />
          

<TextInput 
 style={{ paddingHorizontal: 60, borderWidth : 0.5, padding:10,borderRadius:10, paddingTop:10}} placeholder="Enter username or email"/>
 <Text>     </Text>

 <TextInput 
 style={{ paddingHorizontal: 60, borderWidth : 0.5, padding:10,borderRadius:10, }} placeholder="password"/>

 <TouchableOpacity onPress={() => {
      navigation.navigate("Home");
    }}
    
   style={{backgroundColor:"#13b075", border:1, padding:5,marginTop:3,paddingHorizontal:40,
      borderRadius:56, boxShadow:"1px 2px 3px #888888"
   ,}}>
 
   <Text style={{padding:10,color:"black"}}>Login</Text>
 </TouchableOpacity>
 </View>
    );
  }

  const styles = StyleSheet.create({
    text:{
      fontFamily:"cursive",
      fontSize:20,
      paddingBottom:"5px", 
      fontWeight:"bold",


    }
  })

  

  