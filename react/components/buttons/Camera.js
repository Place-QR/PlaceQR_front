import React from "react";
import { TouchableOpacity, View,Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const MyButtton = () => {
    return(
        <TouchableOpacity onPress={() => alert('clicked!')}>
        <MaterialIcons name="add-a-photo" size={24} color="gray" />
      </TouchableOpacity>
      );
}; 

export default MyButtton;