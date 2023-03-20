import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';


const MyButtton = () => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={() => navigation.navigate('Qrpage')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{backgroundColor: '#2C2F40',padding:10, borderRadius:15,width:200, alignItems:"center",
    justifyContent: 'center' , marginBottom:60, marginTop:30, height:60}}>
                <Text style={{fontSize:30, color:'white'}}>생성하기</Text>
            </View>
        </TouchableOpacity>
    );
}; 

export default MyButtton;