import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './components/screens/Home';
import LoginPage from './components/screens/LoginPage';
import R_page from './components/screens/R_page';
import Qrmake from './components/screens/Qrmake';
import Qrpage from './components/screens/Qrpage';



const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
         screenOptions={{
           headerBackTitleVisible: false,
           headerStyle: {
             height: 120,
            }
          }}> 
        <Stack.Screen name="Home" component={Home} options={{title: 'Place.QR'}} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{title: 'Place.QR'}}/>
        <Stack.Screen name="R_page" component={R_page} options={{title: 'Place.QR'}}/>
        <Stack.Screen name="Qrmake" component={Qrmake} options={{title: 'Place.QR'}}/>
        <Stack.Screen name="Qrpage" component={Qrpage} options={{title: 'Place.QR'}}/>
       


        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});