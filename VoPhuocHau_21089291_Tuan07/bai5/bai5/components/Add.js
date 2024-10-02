import { Text, SafeAreaView, StyleSheet,View,TouchableOpacity,TextInput,Image,Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import React, { useState } from 'react';
// or any files within the Snack

export default function App({navigation}) {

const [content,setContent] = useState('');
const handleSubmit = async () => {
    if (content === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ thông tin');
      return;
    }

    try {
      const response = await fetch('https://66fc9adbc3a184a84d17768f.mockapi.io/ToDo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: content,id:1
        }),
      });

      if (response.ok) {
        const result = await response.json();
        Alert.alert('Thành công', 'Dữ liệu đã được thêm');
        console.log(result);
      } else {
        Alert.alert('Lỗi', 'Không thể thêm dữ liệu');
      }
    } catch (error) {
      Alert.alert('Lỗi', 'Đã xảy ra lỗi trong quá trình gửi dữ liệu');
      console.error(error);
    }
  };


  
  return (
      <View style={{paddingHorizontal:20,gap:30}}>
     <Image source={require("../assets/Container14.png")}/>
     <Text  style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'#8353E2'}}>ADD YOUR JOB</Text>
     <View style={{flexDirection:'row',gap:10,borderWidth:1}}>
     <View style={{padding:10}}><Image source={require("../assets/Frameicon.png")} style={{padding:10}}/></View>    
     <TextInput placeholder="input your job" style={{flex:1,padding:10}} onChangeText={setContent}  />
     </View>
      <TouchableOpacity style={{backgroundColor:'#00BDD6',padding:20,borderRadius:12}}  onPress={() =>handleSubmit()}>
    <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'#ffffff',}}> FINISH-></Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',gap:30,
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
