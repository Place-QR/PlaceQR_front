import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import axios from "axios";


const Home = ({route, navigation}) => {


  //const makeData = route.params.scanData?;
  
  const [placeData, setPlaceData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://www.placeqr.store/places/1");
        setPlaceData(response.data);
      }
      catch(error) {
        console.log(error);
      }
    };
    getData();
  },[]);


  return (
    <View style={styles.container}>
       <Image
            style={{
                width:'100%', 
                height:'40%', 
                position:'absolute', 
               
                bottom:-55,
            }}
            source={require("../../assets/PQRbackIMG4.png")}
            resizeMode="center"
            />
     <StatusBar style="auto" />
     
    <View style={styles.container2}>
     
    
        <Text style={styles.placeTitle}> 생성이 완료 되었습니다.</Text> 
        <Text style={styles.placeTitle}> 나의 장소들에서 확인하세요.</Text> 

        <TouchableOpacity onPress={() => {navigation.navigate('myplace');}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{width:200, alignItems:"center",
    justifyContent: 'center',height:60, marginTop:10}}>
                <Text style={{fontSize:30, color:'black',fontWeight:'bold'}}>확인하기</Text>
            </View>
        </TouchableOpacity>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        alignItems: 'center',
    justifyContent: 'center',
      }, 
    container2: {
  
    width:280,
   
    height:280,
        marginBottom:200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeTitle:{
    color: "black",
    marginBottom:5,
    fontSize:20,
  }
  
   
});

export default Home; 