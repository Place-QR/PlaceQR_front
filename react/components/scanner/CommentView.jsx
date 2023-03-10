import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native';

export default function CommentView(props){

  return(
        <View style={[styles.gbback1,{marginTop:-20}]}>
          <View style={[styles.gbback2]}>
            <View style={{width:284,height:35,alignItems:'left',marginTop:10,}}> 
              <Text style={[styles.gbtext1,{color:'#626262'}]}>
                {props.name}, {props.time}
              </Text>
            </View>
            <ScrollView>
              <View style={{width:284,height:156,alignItems:'left'}}>
                <Text style={[styles.gbtext2,{color:'#626262'}]}>
                  {props.comment}
                </Text>
              </View>
            </ScrollView>
          </View>
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
  gbback1:{
    alignItems:"center",
    justifyContent:"center",    
    backgroundColor:"#2C2F40",
    //marginBottom:20,
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius:10,
    width: 344,
    height: 264,
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
  gbback2:{
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"#FFF",
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius:10,
    width: 298,
    height: 206,
    // left: 34,
    // top: 129,
  },
  place:{
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"#4D5A73",
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius:10,
    width: 115,
    height: 35,
    // left: 34,
    // top: 129,
  },
  guestlist:{
    alignItems:"left",
    //justifyContent:"center", 
    backgroundColor:"#2C2F40",
    //padding:19,
    //paddingLeft:17,
    marginTop:17,
    borderRadius:15,
    width: 337,
    height: 83,
    // left: 34,
    // top: 129,
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    })
  },
  gbtext1:{
    textAlign:'center',
    // paddingVertical:30,
    fontSize:16,
    //fontFamily:'Ruda',
    fontWeight:'bold',
  },
  gbtext2:{
    textAlign:'center',
    // paddingVertical:30,
    fontSize:20,
    //fontFamily:'Ruda',
    fontWeight:'bold',
  },
  placename:{
    textAlign:'center',
    color:"#fff",
    // paddingVertical:30,
    fontSize:24,
    //fontFamily:'Ruda',
    fontWeight:'bold',
  },
  name:{
    textAlign:'center',
    color:"#fff",
    // paddingVertical:30,
    fontSize:24,
    //fontFamily:'Ruda',
    fontWeight:'bold',
  },
  relation:{
    textAlign:'center',
    color:"#fff",
    // paddingVertical:30,
    fontSize:16,
    //fontFamily:'Ruda',
    fontWeight:'Bold',
  },
  writetime:{
    textAlign:'center',
    color:"#fff",
    // paddingVertical:30,
    fontSize:16,
    fontWeight:'normal',
    //fontFamily:'Ruda',
    //fontWeight:'bold',
  },
});
