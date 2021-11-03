import React, {useState} from "react";
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity,Switch} from 'react-native';

export default function sign_up(){

    const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () =>setIsEnabled(previousState => !previousState);

    return(
        
        <View style={styles.main}>
            <View>
            <Text styles={{fontWeight:'bold', fontSize:40}}> SIGN UP </Text>
            </View>
            <TextInput placeholder="First Name" style={styles.input}></TextInput>
            <TextInput placeholder="Last name" style={styles.input}></TextInput>
            <TextInput placeholder="Email" style={styles.input}></TextInput>
            <TextInput placeholder="Password" style={styles.input}></TextInput>

            <Switch
           trackColor={{ false: "#767577", true: "#81b0ff" }}
           thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
           ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}           
            /><Text style={{marginBottom:20, fontWeight:'bold'}}>I accept Terms and Conditions</Text>
        
            <TouchableOpacity style={styles.button}>
            <Text style={{paddingTop:10,fontWeight:'bold'}}>CONTINUE</Text>
            </TouchableOpacity>
            </View>

    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        fontSize:50,
        fontWeight:'bold',
        
       
    },
    input:{
        borderBottomWidth:2,
       margin:30,
      paddingHorizontal:50,
    },

    button:{
        backgroundColor:"tomato",
          textAlign:"center",
          width:'40%',
          height:35,
          boxShadow:"1px 2px 3px #888888",
          borderRadius:5,
    }


})



