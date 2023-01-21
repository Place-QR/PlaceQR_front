import React from "react";
import {StatusBar} from 'expo-status-bar';
import { View,Text,Stylesheet } from 'react-native';//react native에서 view,style,text 가져오기

export default function App() {
  return <View style={styles.container}>
        <View style={styles.city}>
            <Text>Seoul</Text>
        </View> 
        <View style={styles.weather}></View> 
        <StatusBar style="dark"/> 
    </View>


}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "FFFFFF",   
  },
});





