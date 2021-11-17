import  React,{useState} from'react';
import { StyleSheet, Text, View ,Button,Image,TextInput,TouchableOpacity} from 'react-native';

export default function Home({navigation}){
    return(
        <View style={styles.main}>
            <View>
                <Text>Welcome to home</Text>
            </View>

        </View>

    );

}

const styles = StyleSheet.create({
    main:{
        flex:1,

    }
})