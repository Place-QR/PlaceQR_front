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
      <View style={styles.accountbutton}>
        <View style={{width:300,height:74}}>
          <View style={{width:300,height:37,justifyContent:"center"}}>
            <Text style={styles.buttontext1}>홍길동님</Text>
          </View>
          <View style={{width:300,height:37,justifyContent:"center"}}>
            <Text style={styles.buttontext3}>내가 방문한 곳 : n개</Text>
            <Text style={styles.buttontext3}>내가 남긴 방명록 : n개</Text>
          </View>
        </View>
        <View style={{width:35,height:91,}}>
          <View style={{width:34,height:54,justifyContent:"center"}}>
          </View>
          <View style={{width:34,height:37,justifyContent:"center",padding:2}}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('test')}>
              <Image
                  style={{
                      width:'85%', 
                      height:'85%', 
                      resizeMode:"contain",
                  }}
                  source={require("../../assets/icon_setting.png")}
                  />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.button,styles.shadow]}>
        <View style={{width:120,height:102}}>
          <View style={{width:120,height:40}}>
            <Text style={styles.buttontext2}>QR</Text>
          </View>
          <View style={{width:120,height:31,paddingTop:4}}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('test')}>
              <Text style={styles.buttontext4}>QR 코드 생성하기</Text>
            </TouchableOpacity>
          </View>
          <View style={{width:120,height:31,paddingTop:4}}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('test')}>
              <Text style={styles.buttontext4}>QR 코드 읽기</Text>
            </TouchableOpacity>
          </View>
        </View> 
      </View>
      <View style={styles.button}>
        <View style={{width:120,height:102}}>
          <View style={{width:120,height:40}}>
            <Text style={styles.buttontext2}>내 흔적들</Text>
          </View>
          <View style={{width:120,height:31,paddingTop:4}}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Mygbcal')}>
              <Text style={styles.buttontext4}>내가 남긴 흔적들</Text>
            </TouchableOpacity>
          </View>
          <View style={{width:120,height:31,paddingTop:4}}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('myplace')}>
              <Text style={styles.buttontext4}>나의 장소들</Text>
            </TouchableOpacity>
          </View>
        </View>  
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.managebutton} onPress={() => navigation.navigate('test')}>
            <Text style={styles.buttontext1}>(임시)친구 관리</Text>
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
  buttontext1:{
    textAlign:'left',
    // paddingVertical:30,
    fontSize:20,
    //fontFamily:'Ruda',
    fontWeight:'bold',
    color:'white',
  },
  buttontext2:{
    textAlign:'left',
    // paddingVertical:30,
    fontSize:28,
    //fontFamily:'Ruda',
    fontWeight:'bold',
    color:'white',
  },
  buttontext3:{
    textAlign:'left',
    // paddingVertical:30,
    fontSize:11,
    //fontFamily:'Ruda',
    fontWeight:'bold',
    color:'white',
  },
  buttontext4:{
    textAlign:'left',
    // paddingVertical:30,
    fontSize:15,
    //fontFamily:'Ruda',
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
    backgroundColor:"#2C2F40",
    padding:19,
    paddingLeft:17,
    marginBottom:35,
    borderRadius:10,
    width: 355,
    height: 110,
    // left: 34,
    // top: 129,
    display:"flex",
    flexDirection:'row',
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
    backgroundColor:"#2C2F40",
    justifyContent:"center",
    paddingLeft:17,
    padding:19,
    marginBottom:30,
    borderRadius:10,
    width: 355,
    height: 138,
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
  managebutton:{
    alignItems:"left",
    backgroundColor:"#2C2F40",
    justifyContent:"center",
    paddingLeft:17,
    //padding:19,
    marginBottom:30,
    borderRadius:10,
    width: 355,
    height: 53,
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
