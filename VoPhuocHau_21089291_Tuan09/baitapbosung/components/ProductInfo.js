import { Text, SafeAreaView, StyleSheet,TouchableOpacity,View,TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState,useContext} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import { useRoute } from "@react-navigation/native";
// or any files within the Snack
import AssetExample from '../components/AssetExample';
import {CounterProvider,CounterContext} from '../App';
const imageMap = 
{
  '1':require('../assets/image/bifour_-removebg-preview.png'),
  '2':require('../assets/image/bione-removebg-preview(1).png'),
  '3':require('../assets/image/bitwo-removebg-preview1.png'),
  '4':require('../assets/image/bithree_removebg-preview.png'),
  '5':require('../assets/image/bione-removebg-preview.png'),
  '6':require('../assets/image/bifour_-removebg-preview.png')
}


const CounterButton = ({navigation}) => {
  const { count,increaseCount,addToCart } = useContext(CounterContext);
  const route = useRoute();
  const itemdata = route.params?.item;
  const [item,setItem] = useState(itemdata);
  const [item1,setItem1] = useState(3);
  return (
    <View>
    <Text>{count}</Text>
    <View style={{}}>
    <View style={{alignItems:"center"}}>
    <Image style={{width:200,height:190,marginBottom:30}} source={imageMap[item.imageLink]} />
    </View>
    <View style={{alignItems:"flex-start"}}>
    <Text style={{fontSize:18,fontWeight:"bold"}}>{item.name}</Text>
    <View style={{flexDirection:"row",gap:30}}>
    <Text>{item.sale}% OFF I {item.price}$</Text>
    <Text style={{fontWeight:"bold"}}>449$</Text>
    </View>
    </View>
    <Text style={{fontSize:14,marginVertical:15,fontWeight:"bold"}}>Description</Text>
     <Text style={{fontSize:12,textAlign:"left"}}>{item.description}</Text>
    <View style={{flexDirection:"row",gap:10,justifyContent:"center"}}>
    <Image style={{width:30,height:30,marginTop:5}}   source={require('../assets/image/akar-icons_heart.png')} />
    <TouchableOpacity style={{padding:10,backgroundColor:"#E94141",width:200,textAlign:"center",color:"white",fontWeight:"bold",borderRadius:30,}} onPress={addToCart}>Add to card</TouchableOpacity>
    </View>
    </View>
    </View>
  );
};


export default function App({navigation}) {
  
 
  return (
    <View>
    <CounterButton/>
    <TouchableOpacity style={{padding:10,backgroundColor:"#E94141",width:200,textAlign:"center",color:"white",fontWeight:"bold",borderRadius:30,}} onPress={()=>navigation.navigate('Cart')}>Add to card</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
