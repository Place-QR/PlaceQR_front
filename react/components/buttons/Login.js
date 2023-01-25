import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

const MyButtton = () => {
    const navigation = useNavigation();


    return(
        <TouchableOpacity onPress={() => navigation.navigate('Qrmake')}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{borderWidth:1 ,borderColor:'white',backgroundColor: '#2C2F40',height:50,width:250, borderRadius:15, alignItems:"center",
    justifyContent: 'center' , marginBottom:1, }}>
                <Text style={{fontSize:20, color:'white'}}>log in</Text>
            </View>
        </TouchableOpacity>
    );
}; 

export default MyButtton;
