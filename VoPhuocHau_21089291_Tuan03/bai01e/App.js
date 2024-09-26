import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity,TextInput,Image } from 'react-native';
//style={styles.}
export default function App() {
  return (
    <View style={styles.container}>
      <View  style={{paddingHorizontal:20,paddingTop:40}}>
      <Text style={{fontWeight:'bold',fontSize:24}}>REGISTER</Text>
      </View>
      <View style={{gap:20}}>
        <TextInput placeholder='Name' style={{ paddingLeft: 20, width: 250, height: 50, backgroundColor:       '#C9E0D0' }} />
        <TextInput placeholder='Phone' style={{ paddingLeft: 20, width: 250, height: 50, backgroundColor:       '#C9E0D0' }} />
        <TextInput placeholder='Email' style={{ paddingLeft: 20, width: 250, height: 50, backgroundColor: '#C9E0D0' }} />
      <View style={{width:250,height:50,backgroundColor:'#C9E0D0',flexDirection:'row'}}>
           <TextInput placeholder='Password' style={{paddingLeft:20,width:180,height:50}}/>
           <View style={{paddingTop:20,paddingLeft:20}}>
           <Image source={require('./eye.png')} style={{height:15,width:30}} />
           </View>
          </View>
      <TextInput placeholder='Birthday' style={{ paddingLeft: 20, width: 250, height: 50, backgroundColor: '#C9E0D0' }} />     
      </View>
      <View style={{flexDirection:'row',gap:10}}>
       <View style={{height:20,width:20,borderRadius:10,borderWidth:2}}>     
      </View>
       <Text>Male</Text>   
      <View style={{height:20,width:20,borderRadius:10,borderWidth:2}}>   
      </View>
      <Text>Female</Text>   
      </View>



      <View style={{textAlign:'center',gap:10,}}>
      <TouchableOpacity style={{backgroundColor:'#E53935',color:'#ffffff',height:40,paddingTop:10}}>REGISTER</TouchableOpacity>
      <Text style={{textAlign:'center',}}>When you agree to terms and conditions</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
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
