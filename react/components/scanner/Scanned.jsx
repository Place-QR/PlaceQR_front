import React, { useEffect, useState } from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image, Platform } from "react-native";
import axios from "axios";

function Scanned({navigation, route}) {
  const scanData = route.params.scanData;
  
  const [placeData, setPlaceData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${scanData}`);
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
      {console.log(scanData)}
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
      {placeData && 
        <Text style={styles.placeTitle}>{"\n"}{placeData.name}</Text>
      }
      <Text style={styles.textBold}>방문하셨어요!</Text>
      {placeData && 
        <View style={styles.profileImg}>
          <Image source={placeData.photo} alt="" style={{width:'100%', height:'100%'}}/>
        </View>
      }
      <View style={styles.btns}>
        <TouchableOpacity activeOpacity={0.8} style={styles.ReadWriteBtn} onPress={() => navigation.navigate('readgb')}>
          <Text style={styles.WhiteText}>  방명록 읽기 </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.ReadWriteBtn} onPress={() => navigation.navigate('Write', {scanData:`${scanData}`})}>
          <Text style={styles.WhiteText}>  방명록 쓰기 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    placeTitle: {
      fontSize: Platform.select({ios: 40, android: 30}),
      fontWeight: 'bold',
      color: '#2C2F40',
      textDecorationLine: 'underline'
    },
    textBold: {
      fontSize: Platform.select({ios: 36, android: 24}),
      fontWeight: 'bold',
    },
    profileImg:{
      width: 186,
      height: 186,
      backgroundColor: '#DAD8D8',
      borderStyle: 'solid',
      borderColor: '#2C2F40',
      borderWidth: 10,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent:'center',
      marginTop: Platform.select({ios: 50, android:40}),
      marginBottom: 75,
    },
    btns: {
      position:'absolute', 
      bottom: Platform.select({ios: 100, android: 5}),
      zIndex:10,
    },
    ReadWriteBtn:{
      width: 344,
      height: 60,
      backgroundColor: '#2C2F40',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent:'center',
      marginBottom: 20,
    },
    WhiteText:{
      fontSize: Platform.select({ios: 36, android: 28}),
      fontWeight: 'bold',
      color: '#fff',
    }
  });

export default Scanned;