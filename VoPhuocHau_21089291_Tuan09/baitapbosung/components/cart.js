import { Text, SafeAreaView, StyleSheet,TouchableOpacity,View,TextInput,Image,FlatList,ActivityIndicator } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect,useState,useContext} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {CounterProvider,CounterContext} from '../App';
import { useRoute } from "@react-navigation/native";
// or any files within the Snack
import AssetExample from '../components/AssetExample';
const imageMap = 
{
  '1':require('../assets/image/bifour_-removebg-preview.png'),
  '2':require('../assets/image/bione-removebg-preview(1).png'),
  '3':require('../assets/image/bitwo-removebg-preview1.png'),
  '4':require('../assets/image/bithree_removebg-preview.png'),
  '5':require('../assets/image/bione-removebg-preview.png'),
  '6':require('../assets/image/bifour_-removebg-preview.png')
}

const DisplayCounter = () => {
  const { count,cart,addToCart } = useContext(CounterContext);
  const renderItem = ({ item }) => (
     <View style={{alignItems:"center"}}>
    <View style={{flexDirection:"row",marginTop:30,justifyContent:"center"}}>
    <Image style={{width:20,height:20,marginTop:5}}   source={require('../assets/image/akar-icons_heart.png')} />
    <TouchableOpacity style={{}}  onPress={()=>{navigation.navigate("ProductInfo",{item})}}>
    <Image style={{width:110,height:100,marginBottom:30}} source={imageMap[item.imageLink]} />
    </TouchableOpacity>
    </View>
    <Text style={{fontSize:13,}}>{item.name}</Text>
    <Text style={{}}>${item.price}</Text>
    </View>
  );
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Current Count: {count}</Text>
      <FlatList
      data={cart}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2} // Hiển thị 2 cột
      contentContainerStyle={styles.listContainer}
      
    />
    </View>
  );
};

export default function App1({navigation}) {
  return (
   
    <DisplayCounter/>

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
