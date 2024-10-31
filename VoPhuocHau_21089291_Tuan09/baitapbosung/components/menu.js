import { Text, SafeAreaView, StyleSheet,TouchableOpacity,View,TextInput,Image,FlatList,ActivityIndicator } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useEffect,useState,useContext} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

import { useRoute } from "@react-navigation/native";
// or any files within the Snack
import AssetExample from '../components/AssetExample';
const imageMap = 
{
  '1':require('../assets/image/bifour_-removebg-preview.png'),
  '2':require('../assets/image/bione-removebg-preview(1).png'),
  '3':require('../assets/image/bitwo-removebg-preview1.png'),
  '4':require('../assets/image/bithree_removebg-preview.png'),
  '5':require('../assets/image/bione-removebg-preview.png'),
  '6':require('../assets/image/bifour_-removebg-preview.png')
}

const data1 = [
{
  id:'1',
  name:'Pinarello',
  price:1000,
  sale:15,
  description:"hahaha",
  imageId:'1',
  imageLink:require('../assets/image/bifour_-removebg-preview.png')
},
{
  id:'2',
  name:'Pinarello',
  price:1000,
  sale:15,
  description:"hahaha",
   imageId:'2',
  imageLink:require('../assets/image/bione-removebg-preview(1).png')
},
{
  id:'3',
  name:'Pinarello',
  price:1000,
  sale:15,
   imageId:'3',
  description:"hahaha",
  imageLink:require('../assets/image/bitwo-removebg-preview1.png')
},
{
  id:'4',
  name:'Pinarello',
  price:1000,
  sale:15,
   imageId:4,
  description:"hahaha",
  imageLink:require('../assets/image/bithree_removebg-preview.png')
},
{
  id:'5',
  name:'Pinarello',
  price:1000,
  sale:15,
   imageId:5,
  description:"hahaha",
  imageLink:require('../assets/image/bione-removebg-preview.png')
},
{
  id:'6',
   imageId:'6',
  name:'Pinarello',
  price:1000,
  sale:15,
  description:"haha",
  imageLink:require('../assets/image/bitwo-removebg-preview.png')
}
]

export default function App({navigation}) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
      try {
        const response = await axios.get('https://66fc9adbc3a184a84d17768f.mockapi.io/ToDo');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    // Hàm lấy dữ liệu từ API
    fetchData();
  }, []);




const renderItem = ({ item }) => (
     <View style={{alignItems:"center"}}>
    <View style={{flexDirection:"row",marginTop:30,justifyContent:"center"}}>
    <Image style={{width:20,height:20,marginTop:5}}   source={require('../assets/image/akar-icons_heart.png')} />
    <TouchableOpacity style={{}}  onPress={()=>{navigation.navigate("ProductInfo",{item})}}>
    <Image style={{width:110,height:100,marginBottom:30}} source={imageMap[item.imageLink]} />
    </TouchableOpacity>
    </View>
    <Text style={{fontSize:13,}}>{item.name}</Text>
    <Text style={{}}>${item.price}</Text>
    </View>
  );
const haha = () =>{setData(data.slice(0,2))}



  return (
    <View style={{}}>
    <View style={{alignItems:"flex-start"}}>
    <Text style={{fontSize:18,color:"red",fontWeight:"bold",marginTop:30}}>The world’s Best Bike</Text>
    <View style={{flexDirection:"row",gap:15,marginVertical:20}}>
    <TouchableOpacity style={{borderWidth:1,paddingHorizontal:25,color:"red",borderColor:"#E9414187"}} onPress={()=>{haha()}} >All</TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,paddingHorizontal:25,color:"red",borderColor:"#E9414187"}} onPress={()=>{fetchData()}}>Round Bike</TouchableOpacity>
            <TouchableOpacity style={{borderWidth:1,paddingHorizontal:25,color:"red",borderColor:"#E9414187"}}>Mountain</TouchableOpacity>
    </View>
    </View>
    <View style={{height:300}}>
     <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2} // Hiển thị 2 cột
      contentContainerStyle={styles.listContainer}
      
    />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
