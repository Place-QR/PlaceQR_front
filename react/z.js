import React from "react";
import {StatusBar} from 'expo-status-bar';
import { View,Text,Stylesheet } from 'react-native';//react native에서 view,style,text 가져오기

export default function App() {
  return <View style={styles.container}>
        <StatusBar style="dark"/> 
    </View>


}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "FFFFFF",   
  },
});





