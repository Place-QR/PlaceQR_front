import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mypagemain from "./components/Screens/Mypagemain";
import Mygbcal from "./components/Screens/Mygbcal";
import placemanage from "./components/Screens/placemanage";
import readgb from "./components/Screens/readgb";
import test from "./components/Screens/test";


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Mypagemain"
         screenOptions={{
           headerBackTitleVisible: false,
           headerStyle: {
             height: 120,
            }
          }}>
          <Stack.Screen name="Mypagemain" component={Mypagemain} options={{title: '마이페이지'}}/>
          <Stack.Screen name="Mygbcal" component={Mygbcal} options={{title: '마이페이지'}}/>
          <Stack.Screen name="placemanage" component={placemanage} options={{title: '내가 남긴 방명록'}}/>
          <Stack.Screen name="readgb" component={readgb} options={{title: '방명록 리스트'}}/>
          <Stack.Screen name="test" component={test} options={{title: '테스트'}}/>
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