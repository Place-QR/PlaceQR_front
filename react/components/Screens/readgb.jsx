import React from "react";
import {StyleSheet,Button,View,TouchableOpacity, Text,Alert, Image } from "react-native";
import Constants from 'expo-constants';

export default function readgb({navigation}){
  return(
    <View style ={styles.container}>
      <Image
            style={{
                width:'100%', 
                height:'40%', 
                position:'absolute', 
                zIndex:2,
                bottom:-55,
            }}
            source={require("../../assets/PQRbackIMG4.png")}
            resizeMode="center"
            />
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    // marginTop:Constants.statusBarHeight,
    // marginHorizontal:16,
  },
});
