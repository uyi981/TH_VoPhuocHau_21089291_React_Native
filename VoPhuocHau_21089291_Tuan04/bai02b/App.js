import { Text, SafeAreaView, StyleSheet, View,Image,TextInput,TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}><Image source={require('./assets/usb.png')}/> <Text style={styles.text}>USB Bluetooth Music Receiver {'\n'} HJX-001- Biến loa thường thành loa bluetooth</Text></View>
      <View style={{gap:20,}}>
      <Text style={styles.text}>Cực kỳ hài lòng</Text>
      <View style={styles.rowStart}>
      <Image source={require('./assets/star.png')}  style={{height:50,width:50}}/> 
      <Image source={require('./assets/star.png')}  style={{height:50,width:50}}/> 
      <Image source={require('./assets/star.png')}  style={{height:50,width:50}}/> 
      <Image source={require('./assets/star.png')}  style={{height:50,width:50}}/> 
      <Image source={require('./assets/star.png')}  style={{height:50,width:50}}/> 
      </View>
      </View>
      <View style={styles.rowThemHinhAnh}>
      <Image source={require('./assets/camera.png')} style={{height:50,width:60}}/> 
      <View style={{paddingTop:10}}>  <Text style={styles.text}>Thêm hình ảnh</Text></View>
      </View>
       <View>
      <TextInput style={styles.textHolder}  placeholder={'Hãy chia sẻ những điều mà bạn thích về sản phẩm'}/>   
      </View>
      <TouchableOpacity style={styles.button}>Gửi</TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',alignItems:'center',
    gap:30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  row:{flexDirection:'row'},
  rowThemHinhAnh:{flexDirection:'row',gap:20,paddingLeft:40,paddingTop:20,borderWidth:2,height:100,width:350},
  rowStart:{flexDirection:'row',gap:20},
  text:{textAlign:'center',fontWeight:'bold',fontSize:18},
  textHolder:{fontWeight:'bold',fontSize:18,color:'#C4C4C4',borderWidth:2,height:200,width:350,paddingBottom:150},
  button:{backgroundColor:'#0D5DB6',padding:20,width:200,color:'white',textAlign:'center',fontSize:24}
});
