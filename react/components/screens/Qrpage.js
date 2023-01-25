import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const Home = () => {


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
     <View style={styles.container2}>
      <Text style={{borderColor:'white',fontSize:15,borderWidth:1,padding:100,paddingTop:120}}>QR자리</Text>
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
 
   
});

export default Home; 