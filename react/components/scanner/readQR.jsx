import React from "react";
import {StyleSheet, View, Text } from "react-native";

function Read() {
  return (
    <View style={styles.container}>
      <Text style={styles.placeTitle}>{"\n"}장소 이름</Text>
      <Text style={styles.textBold}>방문하셨어요!</Text>
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
    }
  });

export default Read;