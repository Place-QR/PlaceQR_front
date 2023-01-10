import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

function Scanned({navigation}) {
  return (
    <View style={styles.container}>
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
      <Text style={styles.placeTitle}>{"\n"}장소 이름</Text>
      <Text style={styles.textBold}>방문하셨어요!</Text>
      <View style={styles.profileImg}>
        <Text style={styles.textBold}>프로필{"\n"}이미지</Text>
      </View>
      <View style={{position:'absolute', bottom:100, zIndex:10,}}>
        <TouchableOpacity activeOpacity={0.8} style={styles.ReadWriteBtn} onPress={() => navigation.navigate('Read')}>
          <Text style={styles.WhiteText}>  방명록 읽기 </Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.ReadWriteBtn} onPress={() => navigation.navigate('Write')}>
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
      fontSize: 40,
      fontWeight: 'bold',
      color: '#4D5A73',
      textDecorationLine: 'underline'
    },
    textBold: {
      fontSize: 36,
      fontWeight: 'bold',
    },
    profileImg:{
      width: 186,
      height: 186,
      backgroundColor: '#DAD8D8',
      borderStyle: 'solid',
      borderColor: '#4D5A73',
      borderWidth: 10,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent:'center',
      marginTop: 50,
      marginBottom: 75,
    },
    ReadWriteBtn:{
      width: 344,
      height: 60,
      backgroundColor: '#4D5A73',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent:'center',
      marginBottom: 20,
    },
    WhiteText:{
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
    }
  });

export default Scanned;