import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Scan from "./components/scanner/Scanner";
import Scanned from "./components/scanner/Scanned";
import Write from './components/scanner/Write';
import Home from './components/screens/Home';
import LoginPage from './components/screens/LoginPage';
import R_page from './components/screens/R_page';
import Qrmake from './components/screens/Qrmake';
import Qrpage from './components/screens/Qrpage';
import Mypagemain from "./components/part3/Mypagemain";
import Mygbcal from "./components/part3/Mygbcal";
import myplace from "./components/part3/myplace";
import readgb from "./components/part3/readgb";
import test from "./components/part3/test";
import QrToRead from './components/scanner/QrToRead';

//firebase 추가
import FirebaseRegister from './components/screens/FirebaseRegister';
import FirebaseLogin from './components/screens/FirebaseLogin';


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
          }}
          > 
          <Stack.Screen name="Scan" component={Scan} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="Scanned" component={Scanned} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="Write" component={Write} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="Home" component={Home} options={{title: 'Place.QR'}} />
          <Stack.Screen name="LoginPage" component={LoginPage} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="FirebaseLogin" component={FirebaseLogin} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="R_page" component={R_page} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="FirebaseRegister" component={FirebaseRegister} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="Qrmake" component={Qrmake} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="Qrpage" component={Qrpage} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="Mypagemain" component={Mypagemain} options={{title:'Place.QR', gestureEnabled:false, headerShown:false }}/>
          <Stack.Screen name="Mygbcal" component={Mygbcal} options={{title: '장소이름'}}/>
          <Stack.Screen name="myplace" component={myplace} options={{title: '내 장소들'}}/>
          <Stack.Screen name="readgb" component={readgb} options={{title: '방명록 읽기'}}/>
          <Stack.Screen name="QrToRead" component={QrToRead} options={{title: '방명록 읽기'}}/>
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