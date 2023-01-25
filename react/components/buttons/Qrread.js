import React from "react";
import {  View,Text } from "react-native";

const MyButtton = () => {
    return(
    
            <View style={{borderWidth:1 ,borderColor:'black',backgroundColor: '#2C2F40',padding:10, marginBottom:5,marginTop:100, borderRadius:15,width:175,alignItems: 'center',
    justifyContent: 'center'  }}>
                <Text style={{fontSize:20, color:'white'}}>QR 읽기</Text>
            </View>
        
    );
}; 

export default MyButtton;
