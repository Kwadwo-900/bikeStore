import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity,ImageBackground} from 'react-native';


export default function landing_page({navigation}){

    return(
        <ImageBackground style={styles.background} source={{uri:"https://images.unsplash.com/photo-1495570042983-249df576ad3c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmludGFnZSUyMGJpY3ljbGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}>
        <View style={styles.container}>
        <Text style={styles.text}>WELCOME TO THE VINTAGE BIKE SHOP</Text>
           <View style={{flexDirection:'row'}}>
            <TouchableOpacity
                onPress = {()=>{
                    navigation.navigate("Login")
                }}

                style={styles.button}>
                <Text style={{color:"black",fontSize:'20px',fontWeight:'bold',paddingTop:10}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress = {()=>{
                    navigation.navigate("Sign_up")
                }}

                style={styles.button1}>
                <Text style={{color:"black",fontSize:'20px',fontWeight:'bold',paddingTop:10}}>SIGN UP</Text>
            </TouchableOpacity>
            </View>
        </View>
        </ImageBackground>

    );
}

    const styles = StyleSheet.create({
       container:{
        justifyContent:"center",
         alignItems:"flex-end",
         flex:1},

         text:{
             fontWeight:"bold",
             fontSize: 40,
             fontFamily:"cursive",
             color:"white",
             position:"absolute",
             top:80,
             textAlign:"center",
             
         },
         image:{
            borderRadius: 20,
            width: 200,
            height: 200,
            //boxShadow:"1px 2px 3px #888888",
         },
         button:{
            backgroundColor:"tomato",
              textAlign:"center",
              width:'100%',
              height:70,
              borderColor:'black',
              boxShadow:"1px 2px 3px #888888",
             

         },

         button1:{
            backgroundColor:"#13b075",
              textAlign:"center",
              width:'100%',
              height:70,
              marginTop:20,
              borderColor:'black',
              boxShadow:"1px 2px 3px #888888",
              

         },    

         background:{
             flex:1,
             
         }
        
    });