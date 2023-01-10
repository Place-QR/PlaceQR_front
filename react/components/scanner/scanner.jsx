import React from "react";
import {StyleSheet, View, Text, Button, TouchableOpacity, Image } from "react-native";

function Scan({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.scanner}>
        </View>
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
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('Scanned')}>
            <Text style={styles.text}>  QR인식 </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    scanner: {
        width: '95%',
        height: '70%',
        backgroundColor: '#DAD8D8',
        borderStyle: 'solid',
        borderColor: '#4D5A73',
        borderWidth: 10,
        borderRadius: 25,
    },
    button: {
        widht: 100,
        height: 130,
        backgroundColor: '#4D5A73',
        borderColor: '#2F2F40',
        borderWidth: 10,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 30,
        position:'absolute',
        zIndex:10,
        bottom: 50,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});


export default Scan;