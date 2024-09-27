import React from 'react';
import { View, Text, FlatList, StyleSheet,Image,TouchableOpacity } from 'react-native';

const DATA = [
  { id: '1', title: 'ca nấu lẩu nấu mì mini',image:require('./assets/a.png' )},
  { id: '2', title: 'Khô gà bơ tỏi',image:require('./assets/b.png') },
  { id: '3', title: 'Xe xúc cần cậu',image:require('./assets/c.png') },
  { id: '4', title: 'xe cứu hỏa',image:require('./assets/d.png') },
  { id: '5', title: 'Sách lãnh đạo',image:require('./assets/e.png') },
  { id: '6', title: 'Sách dạy con',image:require('./assets/f.png') },
  // Thêm nhiều mục khác nếu cần
];

const App = () => {
  
  const renderItem = ({ item }) => (
    
    <View style={styles.item}>
      <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image}/>  
     </View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.buttonContainner}>
      <TouchableOpacity style={styles.button}>Chat</TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={{gap:10}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,width:330,height:40,backgroundColor:'#1BA9FF'}}>
    <Image source={require('./assets/arrow.png')}/>
    <Text style={{color:'white',fontSize:18}}>Chat</Text>
    <Image source={require('./assets/cart.png')}/>
    </View>
    <Text style={{textAlign:'center'}}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex:1,
    flexDirection:'row',gap:15,paddingBottom:5

  },
  title: {
    fontSize: 24,flex:3,fontSize:15,
  },
  buttonContainner:{flex:2,paddingTop:15,paddingRight:10},
  button:{backgroundColor:'red',width:80,height:40,paddingLeft:20,paddingTop:10,color:'white',fontWeight:'bold'},
  image:{height:70,width:70,},
  imageContainer:{flex:2,paddingLeft:10}
});

export default App;
