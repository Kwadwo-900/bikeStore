import React from 'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


export default function Land({navigation}){

    return(
        <View style={styles.container}>
           
           <LinearGradient
        colors={['#6c5ce7', '#ffeaa7']}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        style={styles.box}>
        <Text style={{fontFamily:"Audiowide",fontSize:30}}>WELCOME TO THE VINTAGE BIKE SHOP</Text>
        </LinearGradient>
            
            
            <Image 
            style={{
         
          borderRadius: 20,
          marginTop: 60,
          width: 200,
          height: 200,
          boxShadow:"1px 2px 3px #888888"
            }}
            
            source={{uri:"https://image.shutterstock.com/image-photo/red-brick-house-walls-decorated-600w-1428952517.jpg"}}/>
            <TouchableOpacity 

                onPress = {()=>{
                    navigation.navigate("Login")
                }}

                style={{backgroundColor:"#13b075", border:1, padding:10,marginTop:100,paddingHorizontal:10,
                borderRadius:5, boxShadow:"1px 2px 3px #888888"
                ,}}>
                <Text style={{padding:5,color:"black",fontSize:'20px'}}>CONTINUE</Text>
            </TouchableOpacity>
        </View>

    );
}

    const styles = StyleSheet.create({
       container:{backgroundColor:"#fff",
       alignItems:"center",
        justifyContent:"center",
         padding:10, 
         flex:1},

         box: {
            width: '100%',
            height: 50,
        flex:1,
        alignItems:"center",
    justifyContent:"center"}
    });