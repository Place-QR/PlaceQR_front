import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { Directions } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const MyButtton = () => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity onPress={() => navigation.navigate('FirebaseRegister')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
        {/* <TouchableOpacity onPress={() => navigation.navigate('R_page')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        > */}
            <View style={{backgroundColor: '#2C2F40',padding:10,width:70, marginBottom:10,alignItems:"left" ,marginRight:80,}}>
                <Text style={{fontSize:10, color:'gray'}}>회원가입</Text>
            </View>
        </TouchableOpacity>
    );
}; 



export default MyButtton;