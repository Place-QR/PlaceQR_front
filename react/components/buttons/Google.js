import React from "react";
import { TouchableOpacity, View,Text,Image } from "react-native";

const MyButtton = () => {
    return(
        <TouchableOpacity onPress={() => alert('MyButton')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        style={{justifyContent: 'center'}}   
        >
            <View style={{borderWidth:1 ,borderColor:'white',height:50,width:280,backgroundColor: '#2C2F40', borderRadius:15,width:250, 
    display:'flex',alignItems:'center',flexDirection: 'row' }}>
         <Image
            style={{width:30,height:30,marginRight:15,marginLeft:10}}
            source={require("../../assets/google.png")}
           
            />
                <Text style={{fontSize:20, color:'white'}}>Google로 시작하기</Text>
            </View>
        </TouchableOpacity>
    );
}; 

export default MyButtton;

