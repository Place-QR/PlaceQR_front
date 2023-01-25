import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import LoginPage from '../screens/LoginPage';
import R_page from '../screens/R_page';
import Qrmake from '../screens/Qrmake';
import Qrpage from '../screens/Qrpage';



const Stack = createStackNavigator();

const StackNav = () => {
    return <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="R_page" component={R_page}/>
        <Stack.Screen name="Qrmake" component={Qrmake}/>
        <Stack.Screen name="Qrpage" component={Qrpage}/>
      
       
 

    </Stack.Navigator>
}

export default StackNav;