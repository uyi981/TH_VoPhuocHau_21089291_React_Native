import { Text, SafeAreaView, StyleSheet,TouchableOpacity,View,TextInput,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function App({navigation}) {
  const [a,seta] = useState('../assets/image/bifour_-removebg-preview.png')
  return (
    <View style={{alignItems:"center"}}>
    <Text style={{fontFamily:"VT323",textAlign:"center",marginTop:30,marginBottom:30}}>A premium online store for {"\n"} sporter and their stylish choice</Text>
    <Image style={{width:180,height:170,marginBottom:30}}   source={require('../assets/image/bifour_-removebg-preview.png')} />
    <Text style={{fontWeight:"bold",fontSize:18}}>POWER BIKE SHOP</Text>
    <TouchableOpacity style={{padding:10,backgroundColor:"#E94141",width:300,textAlign:"center",color:"white",fontWeight:"bold",borderRadius:30,marginTop:30}}
    onPress={()=>{navigation.navigate("Menu")}}
    >GET STARTED</TouchableOpacity>
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
