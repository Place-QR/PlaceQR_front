import React, { Component, useEffect, useState } from 'react'
import {StyleSheet,View,Text,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native';
import axios from 'axios';
//myplace에서 데이터 받아와서 comment list, comment 정보 불러오기, list와 comment 내용 동시에 화면에 불러오기, get, map 하기
export default function readgb({navigation, route}){
   const [commentlist,getCommentlist,touchcomment,setTouchcomment] = useState();

  const getId = async () => {
        try {
          const response = await axios.get(`${data}`);
          getOwnerid(response);
        }
        catch(error) {
          console.log(error);
        }
      };
  // 첫 렌더링 때 getData() 한 번 실행    
  useEffect(() => { 
    getId();
  },[]);

  return(
    <View style ={styles.container}>
      <Image
            style={{
                width:'100%', 
                height:'40%', 
                position:'absolute', 
                zIndex:0,
                bottom:-55,
            }}
            source={require("../../assets/PQRbackIMG4.png")}
            resizeMode="center"
            />
      {/*특정 장소의 클릭한 방명록의 내용을 보여준다*/}
      <View style={{width:344,height:326,borderBottomColor:"#000000",alignItems:"center",justifyContent:"center"}}>
        <View style={[styles.place,{zIndex:1}]}>
          <Text key={user.pk} style={styles.placename}>{placeData.name}</Text>
        </View>
        <View style={[styles.gbback1,{marginTop:-20}]}>
          <View style={[styles.gbback2]}>
            <View style={{width:284,height:35,alignItems:'left',marginTop:10,}}> 
              <Text style={[styles.gbtext1,{color:'#626262'}]}>글쓴이, 글을 쓴 시각</Text>
            </View>
            <ScrollView>
              <View style={{width:284,height:156,alignItems:'left'}}>
                <Text style={[styles.gbtext2,{color:'#626262'}]}>방명록 내용이 보여집니다.</Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View style={{width:344,height:359}}>
        <ScrollView>
          {/* map 함수를 이용하여 방명록 데이터 나열 - 특정 장소의 방명록만 나열 */}
          {news.filter(user => user.category == 'politic').map(user => (
          <View style={styles.guestlist}>
            <View style={{width:116,height:47,marginLeft:30,display:"flex",flexDirection:'row'}}>
              <View style={{width:58,height:47,paddingTop:11}}>
                <Text style={styles.name}>이름</Text>
              </View>
              <View style={{width:58,height:47,paddingTop:19,paddingLeft:10,alignItems:'left'}}>
                <Text style={styles.relation}>관계</Text>
              </View>
            </View>
            <View style={{width:116,height:36,marginLeft:30,paddingTop:5}}>
              <Text style={styles.writetime}>글을 쓴 시각</Text>
            </View>           
          </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}



const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  gbback1:{
    alignItems:"center",
    justifyContent:"center",    
    backgroundColor:"#2C2F40",
    borderRadius:10,
    width: 344,
    height: 264,
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
    borderRadius:10,
    width: 298,
    height: 206,
  },
  place:{
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"#4D5A73",
    borderRadius:10,
    width: 115,
    height: 35,
  },
  guestlist:{
    alignItems:"left",
    backgroundColor:"#2C2F40",
    marginTop:17,
    borderRadius:15,
    width: 337,
    height: 83,
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
    fontSize:16,
    fontWeight:'bold',
  },
  gbtext2:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
  },
  placename:{
    textAlign:'center',
    color:"#fff",
    fontSize:24,
    fontWeight:'bold',
  },
  name:{
    textAlign:'center',
    color:"#fff",
    fontSize:24,
    fontWeight:'bold',
  },
  relation:{
    textAlign:'center',
    color:"#fff",
    fontSize:16,
    fontWeight:'Bold',
  },
  writetime:{
    textAlign:'center',
    color:"#fff",
    fontSize:16,
    fontWeight:'normal',
  },
});
