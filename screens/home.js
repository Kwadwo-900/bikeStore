import  React,{useState} from'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity,ScrollView} from 'react-native';

export default function Home({navigation}){
    return(
        <View style={styles.main}>
                <Text style={styles.txt1}> Select an Item</Text>
                <Text style={{fontSize:'18px'}}>Best Deals</Text>
         <ScrollView
                    horizontal={false}
                >
            <View style={styles.item}>
            <Image style={styles.img} source={{uri:"https://images.unsplash.com/photo-1530811705672-ad9e8526b373?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"}} />

                <Text> Item 1</Text>
                
               
            </View>
            

            <View style={styles.item}>
                <Text>Item 2</Text>
            </View>



        </ScrollView>

        </View>

    );

}

const styles = StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        marginTop:5,

    },
    txt1:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'estonia',
        textAlign:'center',
    },
    item:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        marginRight:24,
        paddingLeft:24,
        paddingBottom:12,
        backgroundColor:'#faaf',
        flexDirection:'row',
        marginTop:10,
    },
    img:{
        
        height:80,
        width:'50%',
    }

})