import React from "react";
import {StyleSheet,Button,View,TouchableOpacity, Text,Alert, Image} from "react-native";
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';

export default function placemanage(){
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
        <ScrollView>
          <View style={styles.placebuttonback}>
            <TouchableOpacity activeOpacity={0.8} style={styles.placebuttonfront} onPress={() => navigation.navigate('Mypagemain')}>
              <View style={{width:90,height:110,borderColor:'red',justifyContent:"center",borderWidth:1}}>
              <Image
                style={{
                    width:'95%', 
                    height:'95%', 
                    // position:'absolute', 
                    // zIndex:2,
                    // bottom:-55,
                }}
                source={require("../../assets/profile_image2.png")}
                resizeMode="center"
              />
              </View>
              <View style={{width:170,height:110,borderColor:'red',borderWidth:1}}>
              <View style={{width:170,height:40,borderColor:'yellow',justifyContent:"center",borderWidth:1}}>
                <Text style={styles.placename}>원주의 자취방</Text>
              </View>
              <View style={{width:170,height:35,borderColor:'yellow',justifyContent:"center",borderWidth:1}}>
                <Text style={styles.placeinfo1}>생성일</Text>
                <Text style={styles.placeinfo2}>22년 12월 28일</Text>
                </View>
              <View style={{width:170,height:35,borderColor:'yellow',justifyContent:"center",borderWidth:1}}>
                <Text style={styles.placeinfo1}>방명록</Text>
                <Text style={styles.placeinfo2}>12개</Text>
              </View>
              </View>
              <View style={{width:40,height:110,borderColor:'red',borderWidth:1}}>
              <View style={{width:40,height:75,borderColor:'yellow',borderWidth:1}}></View>
              <View style={{width:40,height:35,borderColor:'yellow',justifyContent:"center",borderWidth:1}}>
                <TouchableOpacity activeOpacity={0.8} style={styles.trashbutton} onPress={() => Alert.alert("장소 삭제", "해당 장소를 삭제하시겠습니까?", [
                {text:"Yes", onPress:()=>console.log('Yes')},{text:"No", onPress:()=>console.log('No')},])}>
                    <Image
                    source={require("../../assets/icon_trash2.png")}
                    style={{
                      width:"100%",
                      height:"100%",
                      resizeMode:"contain"
                    }}/>
                </TouchableOpacity></View>
              </View>


            </TouchableOpacity>
          </View>        
        </ScrollView>
      </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    // marginTop:Constants.statusBarHeight,
    // marginHorizontal:16,
  },
  placename:{
    textAlign:'left',
    // paddingVertical:30,
    fontSize:23,
    // fontFamily:'Ruda',
    fontWeight:'bold',
    color:'white',
  },
  placeinfo1:{
    textAlign:'left',
    // paddingVertical:30,
    fontSize:15,
    // fontFamily:'Ruda',
    fontWeight:'bold',
    color:'white',
  },
  placeinfo2:{
    textAlign:'left',
    // paddingVertical:30,
    fontSize:13,
    // fontFamily:'Ruda',
    color:'white',
  },
  title:{
    textAlign:'center',
    fontFamily:'Ruda',
    paddingVertical:30,
    fontSize:20,
    fontWeight:'bold',
    color:'white',
  },
  buttonSize:{
    // margin:10
  },
  placebuttonfront:{
    alignItems:"left",
    backgroundColor:"#4D5A73",
    justifyContent:"center",
    //paddingLeft:13,
    //padding:11,
    //marginBottom:30,
    width: 310,
    height: 110,
    // left: 37,
    // top: 287
    borderRadius:10,
    display:"flex",
    flexDirection:'row',
  },
  placebuttonback:{
    alignItems:"center",
    backgroundColor:"#2C2F40",
    justifyContent:"center",
    //paddingLeft:13,
    //padding:11,
    marginBottom:30,
    width: 355,
    height: 130,
    // left: 37,
    // top: 287
    borderRadius:20,  
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
