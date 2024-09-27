import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row' }}>
        <View
          style={{
            flex: 4,
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 10,
          }}>
          <Image
            source={require('./assets/book.png')}
            style={{ width: 100, height: 130 }}
          />
        </View>
        <View style={{ flex: 6, backgroundColor: 'white' }}>
          <Text style={{ fontWeight: 'bold' }}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={{ fontWeight: 'bold' }}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#EE0D0D' }}>
            141.800 đ
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              textDecorationLine: 'line-through',
              fontSize: 20,
              color: '#808080',
            }}>
            141.000 đ
          </Text>
          <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
            <Image
              source={require('./assets/btnminus.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ fontWeight: 'bold' }}>1</Text>
            <Image
              source={require('./assets/btnminus.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{ fontWeight: 'bold', color: '#134FEC', paddingLeft: 50 }}>
              Mua sau
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row',paddingLeft:30}}>
        <Text style={{ fontWeight: 'bold', color: 'black'}}>
          Mã giảm giá đã lưu
        </Text>
        <Text style={{ fontWeight: 'bold', color: '#134FEC', paddingLeft: 20 }}>
         Xem tại đây
        </Text>
      </View>
       <View style={{ flexDirection: 'row',paddingLeft:30,gap:10}}>
        <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10,borderWidth:1,flexDirection:'row'}}>
        <View style={{paddingTop:5}}>
        <View style={{width: 30, height: 16 ,backgroundColor:'#F2DD1B',paddingRight:10}}></View>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize:18,color: 'black', paddingLeft: 5 }}> Mã giảm giá</Text>      
       ́</TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10,flexDirection:'row',backgroundColor:'#0A5EB7'}}>
        <Text style={{ fontWeight: 'bold', fontSize:18,color: 'white', paddingLeft: 5 }}>Áp dụng</Text>      
       ́</TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row',gap:10,paddingHorizontal:20}}>
      <Text style={{ fontWeight: 'bold' }}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
      <Text style={{ fontWeight: 'bold',color:'#134FEC' }}>Nhập tại đây?</Text>
      </View>
       <View style={{flexDirection: 'row',gap:10,paddingHorizontal:20,gap:120}}>
    <Text style={{ fontWeight: 'bold',fontSize: 24, color: 'black' }}>Tạm tính</Text>
     <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#EE0D0D' }}>
            141.800 đ
          </Text>
      </View>
       <View style={{flexDirection: 'row',gap:10,paddingHorizontal:20,gap:120}}>
    <Text style={{ fontWeight: 'bold',fontSize: 24, color: 'black' }}>Thành tiền</Text>
     <Text style={{ fontWeight: 'bold', fontSize: 24, color: '#EE0D0D' }}>
            141.800 đ
          </Text>
      </View>
      <View style={{paddingLeft:100}}>
      <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10,flexDirection:'row',backgroundColor:'#E53935'}}>
        <Text style={{ fontWeight: 'bold', fontSize:18,color: 'white', paddingLeft: 5 }}>TIẾN HÀNH ĐẶT HÀNG</Text>      
       ́</TouchableOpacity>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    backgroundColor: 'white',
    gap:40,
  
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
