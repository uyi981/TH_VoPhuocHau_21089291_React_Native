import React from 'react';
import { FlatList, View, Text, Image, StyleSheet,TextInput } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '39%',
    image:require('./assets/a1.png'), // Đường dẫn đến hình ảnh
    rating: 5,
    reviews: 15,
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '39%',
    image: require('./assets/a2.png'),
    rating: 5,
    reviews: 15,
  },
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '39%',
    image:require('./assets/a3.png'), // Đường dẫn đến hình ảnh
    rating: 5,
    reviews: 15,
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '39%',
    image: require('./assets/a4.png'),
    rating: 5,
    reviews: 15,
  },
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '39%',
    image:require('./assets/a5.png'), // Đường dẫn đến hình ảnh
    rating: 5,
    reviews: 15,
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2',
    price: '69.900 đ',
    discount: '39%',
    image: require('./assets/a6.png'),
    rating: 5,
    reviews: 15,
  },
  // Thêm nhiều sản phẩm ở đây...
];

const ProductList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.discount}>-{item.discount}</Text>
      <Text style={styles.rating}>Rating: {item.rating} ({item.reviews} reviews)</Text>
    </View>
  );

  return (
    <View>
     <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,width:330,height:40,backgroundColor:'#1BA9FF'}}>
    <Image source={require('./assets/arrow.png')}/>
    <Image source={require('./assets/glasses.png')}/>
    <TextInput style={{backgroundColor:'white',width:150,paddingLeft:10,color:'#cccccc'}} placeholder='Dây Cáp usb'  />
    <Image source={require('./assets/cart.png')}/>
    <View style={{paddingTop:10}}>
    <Image source={require('./assets/dau3cham.png')}/></View>

    </View>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2} // Hiển thị 2 cột
      contentContainerStyle={styles.listContainer}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  discount: {
    fontSize: 12,
    color: 'red',
  },
  rating: {
    fontSize: 12,
    color: '#888',
  },
});

export default ProductList;
