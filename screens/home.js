import  React,{useState} from'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import {images} from constants;

export default function Home({navigation}){
    const [showAddToCart, setAddToCart] = useState(false)
    const [selectedItem, setSelectedItem] = u
    seState(null)

    //dummy data to store items 
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Bike 1",
            img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
        },
        {
            id: 1,
            name: "Bike 2",
            img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
           
        },
        {
            id: 2,
            name: "Bike 3",
            img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
        },
    ]);
    return(
        <View>
            
            
        </View>

    );
}
