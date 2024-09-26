import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
//style={styles.}
export default function App() {
  return (
    <View style={styles.container}>
    <View>
    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:42}}>CODE</Text>
    </View>
    <View>
     <Text style={{textAlign:'center',fontWeight:'bold'}}>VERIFICATION</Text>
    </View>
    <View>
     <Text style={{textAlign:'center',fontWeight:'bold'}}>Enter ontime password sent on {'\n'}
++849092605798</Text>
    </View>
    <View style={styles.row}>
    <View style={styles.slot} ></View>
    <View style={styles.slot} ></View>
    <View style={styles.slot} ></View>
    <View style={styles.slot} ></View>
     <View style={styles.slot} ></View>
    <View style={styles.slot} ></View>
    </View>
    <View>
    <TouchableOpacity style={styles.buttonCode}>VERIFY CODE</TouchableOpacity>
    </View>
    
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:30,
    backgroundColor: '#E0F7FA', // Màu nền nhẹ
  },
  slot: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 30,
  },
  row:
  {
    flexDirection:'row',
  },
  buttonCode:
  {
    backgroundColor:'#E3C000',
    width: 300,
    height: 50,
    textAlign:'center',
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

