import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Qrread from '../buttons/Qrread'
import Logbutton from '../buttons/Logbutton';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#2C2F40',fontSize:70}}>Place.QR</Text>
      <StatusBar style="auto" />
      <Qrread/>
      <Logbutton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home; 