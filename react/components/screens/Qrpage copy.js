import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import axios from "axios";


const Home = ({route}) => {


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
     
    //<View style={styles.container2}>
     
     {placeData && 
        <Text style={styles.placeTitle}>{"\n"}{placeData.name}</Text> 
      }
      {placeData &&
      <View>
        <Image source={{uri: placeData.qr_img}}
        style={{width:230, height:230}}></Image>
      </View>
      }
 

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
   borderWidth: 1,
   borderColor: '#2C2F40',
   backgroundColor: '#2C2F40',
   borderRadius:10,
    width:280,
   
    height:280,
        marginBottom:200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeTitle:{
    color: "white",
    marginTop: -30,
    marginBottom:5,
  }
  
   
});

export default Home; 