import React, { useState, useEffect} from "react";
import {StyleSheet,Button,View,TouchableOpacity, Text,Alert, Image} from "react-native";
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';
import axios from 'axios';

const myplace = axios.get({
  URL: '',//url 추가
  params: {
    user_id: `/user?ID=${userId}`,//변수 추가 
  },
});
// async function getUser() { // async, await을 사용하는 경우
//   try {
//     // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.

//     var userId = 12345;
//     await axios.get(`/user?ID=${userId}`); // Backtick(`)을 이용해 이렇게 요청할 수도 있다.
    
//     console.log(response);
//   } catch (e) {
//     // 실패 시 처리
//     console.error(e);
//   }
// }
export default function myplace({navigation}){
  
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
        <View style={{width:375,height:593,justifyContent:"center"}}>        
          <ScrollView>
            <View style={styles.placebuttonback}>
              <TouchableOpacity activeOpacity={0.8} style={styles.placebuttonfront} onPress={() => navigation.navigate('readgb')}>
                <View style={{width:90,height:110,justifyContent:"center"}}>
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
                <View style={{width:170,height:110}}>
                  <View style={{width:170,height:40,justifyContent:"center",}}>
                    <Text style={styles.placename}>원주의 자취방</Text>
                  </View>
                  <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>생성일</Text>
                    <Text style={styles.placeinfo2}>22년 12월 28일</Text>
                  </View>
                    <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>방명록</Text>
                    <Text style={styles.placeinfo2}>12개</Text>
                  </View>
                </View>
                <View style={{width:40,height:110}}>
                  <View style={{width:40,height:18}}></View>
                  <View style={{width:40,height:36}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('test')}>
                      <Image
                        source={require("../../assets/icon_qr3.png")}
                        style={{
                        width:"110%",
                        height:"110%",
                        resizeMode:"cover"
                        }}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:40,height:25}}></View>
                  <View style={{width:40,height:31,justifyContent:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert("장소 삭제", "해당 장소를 삭제하시겠습니까?", [
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
            <View style={styles.placebuttonback}>
              <TouchableOpacity activeOpacity={0.8} style={styles.placebuttonfront} onPress={() => navigation.navigate('readgb')}>
                <View style={{width:90,height:110,justifyContent:"center"}}>
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
                <View style={{width:170,height:110}}>
                  <View style={{width:170,height:40,justifyContent:"center"}}>
                    <Text style={styles.placename}>원주의 자취방</Text>
                  </View>
                  <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>생성일</Text>
                    <Text style={styles.placeinfo2}>22년 12월 28일</Text>
                  </View>
                    <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>방명록</Text>
                    <Text style={styles.placeinfo2}>12개</Text>
                  </View>
                </View>
                <View style={{width:40,height:110}}>
                  <View style={{width:40,height:18}}></View>
                  <View style={{width:40,height:36}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('test')}>
                      <Image
                        source={require("../../assets/icon_qr3.png")}
                        style={{
                        width:"110%",
                        height:"110%",
                        resizeMode:"cover"
                        }}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:40,height:25}}></View>
                  <View style={{width:40,height:31,justifyContent:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert("장소 삭제", "해당 장소를 삭제하시겠습니까?", [
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
            <View style={styles.placebuttonback}>
              <TouchableOpacity activeOpacity={0.8} style={styles.placebuttonfront} onPress={() => navigation.navigate('readgb')}>
                <View style={{width:90,height:110,justifyContent:"center"}}>
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
                <View style={{width:170,height:110}}>
                  <View style={{width:170,height:40,justifyContent:"center"}}>
                    <Text style={styles.placename}>원주의 자취방</Text>
                  </View>
                  <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>생성일</Text>
                    <Text style={styles.placeinfo2}>22년 12월 28일</Text>
                  </View>
                    <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>방명록</Text>
                    <Text style={styles.placeinfo2}>12개</Text>
                  </View>
                </View>
                <View style={{width:40,height:110}}>
                  <View style={{width:40,height:18}}></View>
                  <View style={{width:40,height:36}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('test')}>
                      <Image
                        source={require("../../assets/icon_qr3.png")}
                        style={{
                        width:"110%",
                        height:"110%",
                        resizeMode:"cover"
                        }}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:40,height:25}}></View>
                  <View style={{width:40,height:31,justifyContent:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert("장소 삭제", "해당 장소를 삭제하시겠습니까?", [
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
            <View style={styles.placebuttonback}>
              <TouchableOpacity activeOpacity={0.8} style={styles.placebuttonfront} onPress={() => navigation.navigate('readgb')}>
                <View style={{width:90,height:110,justifyContent:"center"}}>
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
                <View style={{width:170,height:110}}>
                  <View style={{width:170,height:40,justifyContent:"center"}}>
                    <Text style={styles.placename}>원주의 자취방</Text>
                  </View>
                  <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>생성일</Text>
                    <Text style={styles.placeinfo2}>22년 12월 28일</Text>
                  </View>
                    <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>방명록</Text>
                    <Text style={styles.placeinfo2}>12개</Text>
                  </View>
                </View>
                <View style={{width:40,height:110}}>
                  <View style={{width:40,height:18}}></View>
                  <View style={{width:40,height:36}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('test')}>
                      <Image
                        source={require("../../assets/icon_qr3.png")}
                        style={{
                        width:"110%",
                        height:"110%",
                        resizeMode:"cover"
                        }}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:40,height:25}}></View>
                  <View style={{width:40,height:31,justifyContent:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert("장소 삭제", "해당 장소를 삭제하시겠습니까?", [
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
            <View style={styles.placebuttonback}>
              <TouchableOpacity activeOpacity={0.8} style={styles.placebuttonfront} onPress={() => navigation.navigate('readgb')}>
                <View style={{width:90,height:110,justifyContent:"center"}}>
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
                <View style={{width:170,height:110}}>
                  <View style={{width:170,height:40,justifyContent:"center"}}>
                    <Text style={styles.placename}>원주의 자취방</Text>
                  </View>
                  <View style={{width:170,height:35,bjustifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>생성일</Text>
                    <Text style={styles.placeinfo2}>22년 12월 28일</Text>
                  </View>
                    <View style={{width:170,height:35,justifyContent:"center"}}>
                    <Text style={styles.placeinfo1}>방명록</Text>
                    <Text style={styles.placeinfo2}>12개</Text>
                  </View>
                </View>
                <View style={{width:40,height:110}}>
                  <View style={{width:40,height:18}}></View>
                  <View style={{width:40,height:36}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('test')}>
                      <Image
                        source={require("../../assets/icon_qr3.png")}
                        style={{
                        width:"110%",
                        height:"110%",
                        resizeMode:"cover"
                        }}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:40,height:25}}></View>
                  <View style={{width:40,height:31,justifyContent:"center"}}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => Alert.alert("장소 삭제", "해당 장소를 삭제하시겠습니까?", [
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
    //fontFamily:'Ruda',
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
