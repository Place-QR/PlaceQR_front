import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View ,TextInput,Button,TouchableWithoutFeedback,Keyboard,Image} from 'react-native';
import Makeqr from '../buttons/MakeQr';
import Photo from '../buttons/Photo';
import Camera from '../buttons/Camera';

const Home = () => {

    const [inputs, setInputs] = React.useState({
        place: '',
        p_i: '',
    });
    
    const {place, p_i} = inputs;
    
        const onChange = (keyvalue, e) => {
            setInputs({
                ...inputs,
                [keyvalue]: e
            });
        };

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>

      <StatusBar style="auto" />
      <View style={styles.container2}>
      <TextInput 
      style={styles.inputId}
      placeholder="장소 이름"
      placeholderTextColor={"gray"}
      onChangeText={(e)=> onChange("place",e)}
      value={place}
      />
      <TextInput 
      style={styles.inputId2}
      placeholder="장소 소개"
      placeholderTextColor={"gray"}
      onChangeText={(e)=> onChange("p_i",e)}
      value={p_i}
      textAlignVertical="top"
      multiline={true}
      />
      <View style={styles.fixToText}>
      <Photo/>
      <Camera />
      </View>
      </View>
      
    <Makeqr />
    </View>
    </TouchableWithoutFeedback>
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
   alignItems: 'center',
   
    width:350,
    height:550,
  },
  inputId : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    marginTop:50,
    marginBottom:30,
    width:300,
    height: 50,
    color:'black',
    fontSize:20,
    backgroundColor:'white',
  },
  inputId2 : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    width:300,
    height:250,
    color:'black',
    fontSize:20,
    backgroundColor:'white'},

    container3 : {
    backgroundColor: '#2C2F40',
    alignItems: 'center',
    justifyContent: 'center',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight:250,
      marginTop:5,
    },
});

export default Home; 