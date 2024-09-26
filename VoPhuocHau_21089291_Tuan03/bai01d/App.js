import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,TextInput,Image } from 'react-native';
//style={styles.}
export default function App() {
  return (
    <View style={styles.container}>
      <View  style={{paddingHorizontal:20,paddingVertical:40}}>
      <Text style={{fontWeight:'bold',fontSize:24}}>LOGIN</Text>
      </View>
      <View style={{gap:20}}>
      <TextInput placeholder='Email' style={{paddingLeft:20,width:250,height:50,backgroundColor:'#C9E0D0'}}/>
      <View style={{width:250,height:50,backgroundColor:'#C9E0D0',flexDirection:'row'}}>
           <TextInput placeholder='Password' style={{paddingLeft:20,width:180,height:50}}/>
           <View style={{paddingTop:20,paddingLeft:20}}>
           <Image source={require('./eye.png')} style={{height:15,width:30}} />
           </View>

      </View>
      </View>
      <View style={{textAlign:'center',gap:10,}}>
      <TouchableOpacity style={{backgroundColor:'#E53935',color:'#ffffff',height:40,paddingTop:10}}>LOGIN</TouchableOpacity>
      <Text style={{textAlign:'center',}}>When you agree to terms and conditions</Text>
      <Text style={{textAlign:'center',color:'#5D25FA'}}>For got your password?</Text>
      <Text style={{textAlign:'center',}}>Or login with</Text>
      </View>
      <View>
      <Image source={require('button.png')} style={{height:40,width:300}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 40,
    backgroundColor: '#D0E7D7', // Màu nền nhẹ
  },
  slot: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
  },
  buttonCode: {
    backgroundColor: '#E3C000',
    width: 300,
    height: 50,
    textAlign: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#E3C000', // Màu vàng cho nút
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
