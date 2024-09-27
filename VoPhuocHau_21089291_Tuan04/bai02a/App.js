
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,TextInput,Image } from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
export default function App() {
  return (
   <View style={styles.container}>
    <Text style={{fontWeight:'bold',fontSize:32,paddingBottom:80,paddingRight:150}}>LOGIN</Text>
    <View style={{gap:20}}>
    <View style={styles.textInputContainer}>
    <View style={styles.imageContainer}>
    <Image style={styles.image} source={require('./assets/icons8-amazon-kindle-50.png')}/>
    </View>
    <TextInput style={styles.textInput} placeholder="Name" />
    </View>
    <View style={styles.textInputContainer} >  
    <View style={styles.imageContainer,{paddingTop:10,paddingLeft:15}}>
    <Image style={styles.image,{height:25,width:25}} source={require('./assets/Remove-bg.ai_1727280933343.png')}/>
    </View>
    <TextInput style={styles.textInput} placeholder="Password" />
    <View style={styles.imageContainer,{paddingTop:15,paddingRight:10}}>
    <Image style={styles.image,{height:15,width:30}} source={require('./assets/eye.png')}/>
    </View>   
    </View>
    </View>
    <View>
    <TouchableOpacity style={{height:50,width:270,backgroundColor:'#000000',color:'#ffffff',paddingLeft:100,paddingTop:15}}>LOGIN</TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity >Forgot your password?</TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#FBCB00',
    padding: 8,
    gap:40,
  },
  textInputContainer:
  {
    flex:1,
    flexDirection:'row',
    height:50,width:270,backgroundColor:'#DCBE3B',borderWidth:2,borderColor:'#ffffff'
  },
  textInput:
  {
    height:50,width:200,paddingLeft:20
  },
  image:
  {
    height:35,width:35
  },
   imageContainer:
  {
    height:35,width:35,paddingTop:7,paddingLeft:10
  }
});
