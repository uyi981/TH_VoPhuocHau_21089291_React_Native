import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
   return (
    <View  style={styles.container}>
    <View style={{width:100,height:100,borderRadius:50,borderWidth:10}}></View>
    <View > 
    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:24}}>GROW</Text>
    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:24}}> YOUR BUSINESS</Text>
    </View>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:40,
    backgroundColor:'#00CCF9'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap:50
  },
  loginButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  signupButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
