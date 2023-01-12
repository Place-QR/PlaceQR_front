import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Scan from "./components/scanner/Scanner";
import Scanned from "./components/scanner/Scanned";
import Write from './components/scanner/Write';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Scan"
        screenOptions={{
           headerBackTitleVisible: false,
           headerStyle: {
             height: 120,
            }
          }}> 
          <Stack.Screen name="Scan" component={Scan} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="Scanned" component={Scanned} options={{title: 'Place.QR'}}/>
          <Stack.Screen name="Write" component={Write} options={{title: 'Place.QR'}}/>
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
