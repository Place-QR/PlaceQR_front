import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Mypagemain from "./components/part3/Mypagemain";
import Mygbcal from "./components/part3/Mygbcal";
import myplace from "./components/part3/myplace";
import readgb from "./components/part3/readgb";
import test from "./components/part3/test";


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
          <Stack.Screen name="Mypagemain" component={Mypagemain} options={{title:'Place.QR'}}/>
          <Stack.Screen name="Mygbcal" component={Mygbcal} options={{title: '장소이름'}}/>
          <Stack.Screen name="myplace" component={myplace} options={{title: '내 장소들'}}/>
          <Stack.Screen name="readgb" component={readgb} options={{title: '방명록 읽기'}}/>
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