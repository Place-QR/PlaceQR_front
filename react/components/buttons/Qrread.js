import React from "react";
import {  View,Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const MyButtton = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Scan')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{borderWidth:1 ,borderColor:'black',backgroundColor: '#2C2F40',padding:10, marginBottom:5,marginTop:100, borderRadius:15,width:175,alignItems: 'center',
    justifyContent: 'center'  }}>
                <Text style={{fontSize:20, color:'white'}}>QR 읽기</Text>
            </View>
        </TouchableOpacity>
    );
}; 

export default MyButtton;
