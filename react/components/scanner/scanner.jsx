import React from "react";
import {StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";

function Scan({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.scanner}>
        </View>
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
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});


export default Scan;