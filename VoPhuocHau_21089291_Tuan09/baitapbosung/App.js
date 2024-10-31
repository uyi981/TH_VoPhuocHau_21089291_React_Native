import { Text, SafeAreaView, StyleSheet,TouchableOpacity,View,TextInput,Image,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React,{useState,useContext} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import axios from 'axios';
import Menu from './components/menu';
import Cart from './components/cart';
import ProductInfo from './components/ProductInfo';
// or any files within the Snack
import AssetExample from './components/AssetExample';
// st
export const CounterContext = React.createContext();
// Tạo Provider để bao quanh các component con và cung cấp dữ liệu
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(9);
  const [cart,setCart]= useState([]);
  // Hàm tăng số đếm
  const increaseCount = () => setCount(count + 1);
    const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        // Tăng số lượng nếu sản phẩm đã có
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Thêm sản phẩm mới vào giỏ
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  

  return (
    <CounterContext.Provider value={{cart, count, increaseCount,addToCart }}>
      {children}
    </CounterContext.Provider>
  );
};








const userContext = React.createContext();
const Stack = createNativeStackNavigator();
export default function App() {

  return (
  //  <View style={{marginHorizontal:0,marginVertical:0,flexDirection:"column"}}>
  //   <Text style={{fontFamily:"",fontWeight:'normal',fontSize:8,color:"black"}},textAlign:'center'></Text>
  //  </View>
  //<Image source={require('')} style={{width:0,height:0}}/>
  //<TouchableOpacity style={{paddingHorizontal:0,paddingVertical:0,backgroundColor:"black"}}></TouchableOpacity>

  <CounterProvider>
   <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen name ="HomeScreen" component={HomeScreen}/>
    <Stack.Screen name ="Menu" component={Menu}/>
    <Stack.Screen name ="ProductInfo" component={ProductInfo}/>
      <Stack.Screen name ="Cart" component={Cart}/>
    </Stack.Navigator>
    </NavigationContainer>
    </CounterProvider>
  );
}

  function HomeScreen({navigation}) {
  return (
    <View style={{alignItems:"center"}}>
    <Text style={{fontFamily:"VT323",textAlign:"center",marginTop:30,marginBottom:30}}>A premium online store for {"\n"} sporter and their stylish choice</Text>
    <Image style={{width:180,height:170,marginBottom:30}}   source={require('./assets/image/bifour_-removebg-preview.png')} />
    <Text style={{fontWeight:"bold",fontSize:18}}>POWER BIKE SHOP</Text>
    <TouchableOpacity style={{padding:10,backgroundColor:"#E94141",width:300,textAlign:"center",color:"white",fontWeight:"bold",borderRadius:30,marginTop:30}}
    onPress={()=>{navigation.navigate("Menu")}}
    >GET STARTED</TouchableOpacity>
    </View>
  );
}

