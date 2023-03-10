import React from "react";
import { TouchableOpacity, View,Text,Image } from "react-native";

const MyButtton = () => {
    return(
        <TouchableOpacity onPress={() => alert('MyButton')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{borderWidth:1 ,borderColor:'white',height:50,width:280,backgroundColor: '#2C2F40', borderRadius:15,width:250, 
    display:'flex',alignItems:'center',flexDirection: 'row' , marginBottom:10, marginTop:30,display:'flex',  flexDirection: 'row', }}>
                <Text style={{fontSize:20, color:'white',marginLeft:63}}>카카오로 시작하기</Text>
            </View>
        </TouchableOpacity>
    );
}; 

export default MyButtton;
