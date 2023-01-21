import React from "react";
import {StyleSheet,Button,View,TouchableOpacity, Text,Alert, Image } from "react-native";
import Constants from 'expo-constants';

export default function test({navigation}){
  return(
    <View style ={styles.container}>
      <Image
            source={require("../../assets/icon_trash2.png")}
            resizeMode="center"
            />
      
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:"#000000",
    // marginTop:Constants.statusBarHeight,
    // marginHorizontal:16,
  },
})