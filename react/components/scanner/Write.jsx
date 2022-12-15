import React from "react";
import {StyleSheet, View, Text, Platform } from "react-native";

function Write({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
            <Text style={styles.placeTitle}>OOO의 집</Text>
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
    formContainer: {
        width: 350,
        height: 585,
        backgroundColor: '#4D5A73',
        marginTop: 5,
        alignItems: 'center',
        borderRadius: 20,
        ...Platform.select({
            ios: {
                shadowColor: "rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: 10,
                    width: 10,
                },
            },
            android: {
                elevation: 3,
            }
        }),
    },
    placeTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
    }
  });

export default Write;