import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import {Image, TouchableOpacity,TextInput, View} from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
export default function App() {
  return (
   <View style={styles.container}>
  <Image
        source={require('./image/Remove-bg.ai_1727280933343.png')} // Đường dẫn tới ảnh PNG có nền trong suốt
        style={styles.lock}
      />
     <Text style={styles.tiltes}>FORGET {'\n'} PASSWORD</Text>
     <Text style={{textAlign:'center',fontWeight:'bold'}}>Provide your account’s email for which you {'\n'} want to reset your password</Text>
    <TextInput style={{paddingLeft:20,height:50,width:300,borderColor:'gray',backgroundColor:'#dddddd'}}          placeholder="Email" />
    <TouchableOpacity style={styles.button}>
       NEXT
   </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    alignContent:'center',
    gap:30,
    backgroundColor: '#E0F7FA',
    padding: 8,
  },
  lock:
  {
    width:100,
    height:120,
  },
  button:{backgroundColor:'yellow',paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    borderRadius: 5,height:50,width:300,textAlign:'center',fontWeight:'bold'}
  ,
  tiltes:
  {
    textAlign:'center',
    fontWeight: 'bold',
  }
});
