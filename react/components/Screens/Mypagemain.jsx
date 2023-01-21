import React from "react";
import {StyleSheet,Button,View,TouchableOpacity, Text,Alert, Image } from "react-native";
import Constants from 'expo-constants';

export default function Mypagemain({navigation}){
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
      <TouchableOpacity activeOpacity={0.8} style={[styles.accountbutton,styles.shadow]} onPress={() => navigation.navigate('test')}>
            <Text style={styles.buttontext}>계정</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.button,styles.shadow]} onPress={() => navigation.navigate('Mypagemain')}>
            <Text style={styles.buttontext}>QR 생성</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.button,styles.shadow]} onPress={() => navigation.navigate('Mygbcal')}>
            <Text style={styles.buttontext}>내가 남긴 방명록</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.button,styles.shadow]} onPress={() => navigation.navigate('placemanage')}>
            <Text style={styles.buttontext}>내 장소 보기</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} style={[styles.button,styles.shadow]} onPress={() => navigation.navigate('Mypagemain')}>
            <Text style={styles.buttontext}>(임시)친구 관리</Text>
      </TouchableOpacity>
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
  buttontext:{
    textAlign:'left',
    // paddingVertical:30,
    fontSize:20,
    fontFamily:'Ruda',
    fontWeight:'bold',
    color:'white',
  },
  accountname:{
    textAlign:'center',
    // paddingVertical:30,
    fontSize:20,
    // fontFamily:'Ruda',
    fontWeight:'bold',
    color:'white',
  },
  title:{
    textAlign:'center',
    // fontFamily:'Ruda',
    // paddingVertical:30,
    fontSize:20,
    fontWeight:'bold',
    color:'white',
  },
  buttonSize:{
    // margin:10
  },
  accountbutton:{
    alignItems:"left",
    backgroundColor:"#4D5A73",
    padding:9,
    paddingLeft:13,
    marginBottom:56,
    borderRadius:10,
    width: 323,
    height: 130,
    // left: 34,
    // top: 129,
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    })
  },
  button:{
    alignItems:"left",
    backgroundColor:"#4D5A73",
    justifyContent:"center",
    paddingLeft:13,
    //padding:11,
    marginBottom:30,
    borderRadius:10,
    width: 323,
    height: 70,
    // left: 37,
    // top: 287
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    })
  },

});
