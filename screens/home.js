import  React,{useState} from'react';
import { StyleSheet, Text, View ,Image,TextInput,TouchableOpacity} from 'react-native';
import {images} from 'constants';

const Home = ({navigation}) => {
    const [showAddToCart, setAddToCart] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    //dummy data to store items 
    const [trending, setTrending] = React.useState([
        {
            id: 0,
            name: "Bike 1",
            img: images.blackBike,
            type: "Old",
            price: "$186",
        },
        {
            id: 1,
            name: "Bike 2",
            img: images.Mbike,
            type: "Old"
            price: "$135",
           
        },
        {
            id: 2,
            name: "Bike 3",
            img: images.Wbike,
            type: "Old",
            price: "$199",
        },
    ]);
   function renderItems(item,index){
       var bikeView = {}
       if(index == 0){
           bikeView = {marginLeft:24}
       } else {bikeView = {} }

       return (
        <TouchableOpacity
        style={{ height: 240, width: 180, justifyContent: 'center', marginHorizontal: 8, ...bikeVieW }}
        onPress={() => {
            setSelectedItem(item)
            setAddToCart(true)
        }}
    >
        <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>
       )
   }
}

export default Home;