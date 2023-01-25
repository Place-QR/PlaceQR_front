import React from "react";
import { TouchableOpacity, View,Text } from "react-native";


const MyButtton = () => {
    
    return(
        <TouchableOpacity onPress={() => alert('clicked!')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{backgroundColor: '#2C2F40',padding:10,width:110, marginBottom:10,alignItems:"right",maringLeft:10,}}>
                <Text style={{fontSize:10, color:'gray'}}>아이디/비밀번호 찾기</Text>
            </View>
        </TouchableOpacity>
    );
}; 



export default MyButtton;
