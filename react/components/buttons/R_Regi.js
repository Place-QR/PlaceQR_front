import React from "react";
import { TouchableOpacity, View,Text } from "react-native";

const MyButtton = () => {
    return(
        <TouchableOpacity onPress={() => alert('MyButton')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{borderWidth:1 ,borderColor:'white',backgroundColor: '#2C2F40',padding:10, borderRadius:15,width:100, alignItems:"center",
    justifyContent: 'center' , marginBottom:1, marginTop:30}}>
                <Text style={{fontSize:20, color:'white'}}>가입하기</Text>
            </View>
        </TouchableOpacity>
    );
}; 

export default MyButtton;