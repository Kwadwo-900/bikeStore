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
                <Image style={styles.img} source={{uri:"https://images.unsplash.com/photo-1523740856324-f2ce89135981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1526&q=80"}} />

                <Text>Yellow Bike</Text>
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
        color: 'rgba(0,0,0, .5)',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: '1rem',
        marginHorizontal: 7,
        fontWeight: 500,
        flexDirection:'row', 
    },
    img:{
        
        height:80,
        width:80,
    }

})