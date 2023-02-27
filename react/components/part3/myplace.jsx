import React, { useState, useEffect} from "react";
import {StyleSheet,Button,View,TouchableOpacity, Text,Alert, Image} from "react-native";
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';
import axios from 'axios';


// const myplace = axios.get({
//   URL: 'https://www.placeqr.store/',//url 추가
//   params: {
//     user_id: `/user?ID=${userId}`,//변수 추가 
//   },
// });
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
// const [placedata, setPlacedata] = useState([]);
// function getData() {
//   axios.get("https://www.placeqr.store/")
//     .then((response) => {
//       setText([...response.data]);
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// };
//place get 해와서 owner 조건문 map함수
export default function myplace({navigation}){
  
  const [placeData,setPlaceData] = useState();
  const [ setRefresh] = useState(false);
  //const [ownerid,getOwnerid,placeData,setPlaceData] = useState(); id 받아오기, useeffect, 방명록 개수, place id 넘겨주기,데이터 삭제 지정된 장소 삭제, 화면에서도 장소 데이터 삭제, qr 누르면 qr 이미지 창으로 넘어가기, qr 데이터 넘겨주기
//사용자 지정 안하고 전체 list 불러오는 것까지만 구현함, merge해야 확인 가능
  // const getId = async () => {
  //       try {
  //         const response = await axios.get(`https://www.placeqr.store/`);
  //         getOwnerid(response);
  //       }
  //       catch(error) {
  //         console.log(error);
  //       }
  //     };
  // // 첫 렌더링 때 getData() 한 번 실행    
  // useEffect(() => { 
  //   getId();
  // },[]);
  const getData = async () => {
    try {
      const response = await axios.get(`https://www.placeqr.store/places/`);
      setPlaceData(response.data);
    }
    catch(error) {
      console.log(error);
    }
  };
  const refresh=() => {
  // ................. //delete logic
      reload ? setRefresh(false) : setRefresh(true) //toggle just to change state
  }
  // 첫 렌더링 때 getData() 한 번 실행    
  useEffect(() => { 
    getData();
    //getId();
  }, [reload]);


  
 
  //navigation.navigate('readgb',{placeData:`${data}`});//place id 넘겨주기
  // //place qr의 qr코드만 인식
  // if(check == 'placeqr') {
   //   navigation.navigate('Scanned',{scanData:`${data}`});
  //   // 페이지 이동과 함께 qr code 데이터 넘김
  // }
  // else {
  //   Linking.openURL(`${data}`);
  // }
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
            {/* map 함수를 이용하여 장소 데이터 나열 - 내 장소만 나열 news.filter(user => user.category == 'politic') */}
            {placeData && placeData.map((e) => (
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
                    source={{uri:e.photo}}
                    resizeMode="center"
                  />
                  </View>
                  <View style={{width:170,height:110}}>
                    <View style={{width:170,height:40,justifyContent:"center",}}>
                      <Text style={styles.placename}>{e.name}</Text>
                    </View>
                    <View style={{width:170,height:35,justifyContent:"center"}}>
                      <Text style={styles.placeinfo1}>생성일</Text>
                      <Text style={styles.placeinfo2}>{e.created_at}</Text>
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
                        {text:"Yes", onPress:()=>axios.delete(`https://www.placeqr.store/places/`+`${e.id}`,refresh())},{text:"No", onPress:()=>console.log('No')},refresh()])
                        }>
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
            ))}                   
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
