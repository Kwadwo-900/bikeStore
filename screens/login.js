import * as React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity, ImageBackground} from 'react-native';
import { AntDesign } from "@expo/vector-icons";


export default function Login({navigation}) {
    return (
      <ImageBackground style={styles.background} source={require("../assets/cool-background.svg")}>
      <View style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center"}}>
          <View>
        {/*}  <Image style={styles.image} source={{uri:"https://images.unsplash.com/photo-1530067588105-5efd710ccd79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmludGFnZSUyMGJ5Y3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}} />*/}
          <Image style={styles.image} source={require("../assets/icons/large.png")} />
          </View>

          <Text style={styles.text}>Sign in to continue</Text>
          <AntDesign name="down" size={24} color="black" />
          
<Text style={{marginTop:'5px', fontSize:'12px',fontDecoration:'bold'}}>e-mail</Text>
<TextInput 
 style={{ paddingHorizontal: 60, borderWidth : 0.5, padding:10,borderRadius:10, paddingTop:10}} placeholder="Enter username or email"/>
 <Text style={{marginTop:'5px', fontSize:'12px',fontDecoration:'bold'}}>password</Text>

 <TextInput 
 style={{ paddingHorizontal: 60, borderWidth : 0.5, padding:10,borderRadius:10, }} placeholder="password"/>

 <TouchableOpacity onPress={() => {
      navigation.navigate("Home");
    }}
    
   style={{backgroundColor:"#fcfa17", border:1, padding:5,marginTop:3,paddingHorizontal:40,
      borderRadius:5, boxShadow:"1px 2px 3px #888888"
   ,}}>
 
   <Text style={{padding:10,color:"black"}}>Login</Text>
 </TouchableOpacity>
 </View>
 </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    text:{
      fontFamily:"cursive",
      fontSize:20,
      paddingBottom:"5px", 
      fontWeight:"bold",


    },
    image:{
      borderRadius: 20,
      width: 200,
      height: 200,
    },
     background:{
             flex:1,  
         }

  })

  

  