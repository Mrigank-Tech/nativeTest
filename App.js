/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  Image, 
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const App = () => {
  const [wishListArr,setWishListArr] = useState(null);

  useEffect(()=>{
    LoadData()
  })

  const LoadData = () => {
    let fData = new FormData();
    fData.append('language_type','en')
    fData.append('user_id','771')

    fetch('http://139.59.126.99/teleboutik/webservices/my_wish_list',{
      method : 'POST',
      body : fData
    })
    .then(res=>res.json())
    .then(response=>{
      console.log(response.data[0])
      setWishListArr(response.data)
    })
    .catch(err=>{
      setWishListArr(null)
    })
  }

  const OnDeletePress = (product_id) => {
    Alert.alert(
      "Delete Item from wishlist?",
      "",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            let fData = new FormData();
            fData.append('product_id',product_id)
            fData.append('user_id','771')

            fetch('http://139.59.126.99/teleboutik/webservices/delete_wish_list_item',{
              method : 'POST',
              body : fData
            })
            .then(res=>res.json())
            .then(response=>{
              console.log(response.data[0])
              // setWishListArr(response.data)
              LoadData()
            })
            .catch(err=>{
              // setWishListArr(null)
            })

        } }
      ]
    );

    
  }

  return(
    <View>
        <View style={{backgroundColor : "#e6005c", height : SCREEN_HEIGHT*0.08, width : SCREEN_WIDTH, alignSelf : 'center', flexDirection : 'row', alignItems : 'center'}}>
            <TouchableOpacity style={{alignSelf : 'center', alignItems : 'center', width : SCREEN_WIDTH*0.1}}>
                <Icon name="arrow-left" color="#ffffff" size={18} />
            </TouchableOpacity>
            <View style={{alignSelf : 'center', alignItems : 'center', width : SCREEN_WIDTH*0.9}}>
              <Text style={{color : "#ffffff", fontSize : 18, fontWeight : "700", alignSelf : 'center', alignItems : 'center'}}>My Wishlist</Text>
            </View>
        </View>
        <ScrollView contentContainerStyle={{paddingVertical : SCREEN_HEIGHT*0.02, width : SCREEN_WIDTH, alignSelf : 'center'}}>
            {
              wishListArr && wishListArr !== null ?
              wishListArr.map((el,i)=>{
                return(
                  <View style={{width : SCREEN_WIDTH, flexDirection : 'row', alignSelf : 'center', alignItems : 'center', paddingVertical : SCREEN_HEIGHT*0.01, borderBottomWidth : 0.5}}>
                    <View style={{alignSelf : 'center', padding : 5}}>
                        <Image source = {{uri : el.images[0]}} style={{height : SCREEN_HEIGHT*0.13, width : SCREEN_WIDTH*0.2}} />
                    </View>
                    <View style={{width : SCREEN_WIDTH*0.7, alignSelf : 'center', paddingLeft : SCREEN_WIDTH*0.04}}>
                        <Text style={{fontSize : 16, fontWeight : '600'}}>{el.title.length > 50 ? el.title.slice(0,37)+"..." : el.title}</Text>
                        <View style={{flexDirection : 'row', alignItems : 'center', backgroundColor : "#29a3a3", width : SCREEN_WIDTH*0.15, paddingVertical : SCREEN_HEIGHT*0.01, borderRadius : 50, justifyContent : 'space-evenly' }}>
                            <Text style={{color : "#ffffff"}}>{el.rating_total}</Text>
                            <Icon name="star" color = "#ffffff" size ={12} />
                        </View> 
                        <Text style={{fontSize : 16, fontWeight : "700"}}>Rs {el.sale_price}</Text>
                    </View>
                    <View style={{width : SCREEN_WIDTH*0.7, }}>
                        <TouchableOpacity style={{padding : 5}} onPress = {()=>{OnDeletePress(el.product_id)}}>
                            <Icon name="trash-alt" size = {16} color="#29a3a3" />
                        </TouchableOpacity>
                    </View>
                  </View>
                )
              })
              :
              null
            }
        </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
