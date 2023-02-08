import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableWithoutFeedback, Keyboard,Image} from 'react-native';
import Login from '../buttons/Login.js';
import Reig from '../buttons/Reig';
import Find from '../buttons/Find.js';
import Kakao from '../buttons/Kakao.js';
import Google from '../buttons/Google.js';


const LoginPage = () => {

  const [inputs, setInputs] = React.useState({
    Id: '',
    password: '',
});

const {Id, password} = inputs;

    const onChange = (keyvalue, e) => {
        setInputs({
            ...inputs,
            [keyvalue]: e
        });
    };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
      <Text style={{color: 'white',fontSize:52}}>Place.QR</Text>
      <Text style={{color: 'white',fontSize:30}}>방문한 곳에 나의 </Text>
      <Text style={{color: 'white',fontSize:30}}>흔적을 남겨보세요 </Text>
      <StatusBar style="auto" />
      
      
      <View style={styles.inputId}>
      <Image
            
            source={require("../../assets/user.png")}
           
            />
          
            
      <TextInput 
      style={{width:190,
        height: 30,marginLeft:5,marginBottom:10,color:'#ffffff',fontSize:20,}}
      placeholder="ID"
      placeholderTextColor={"#ffffff"}
      onChangeText={(e)=> onChange("Id",e)}
      value={Id}
      />
      </View>

      <View style={styles.inputPassword}>
      <Image
            
            source={require("../../assets/lock-alt.png")}
           
            />
      <TextInput 
       style={{width:190,
        height: 30,marginLeft:5,marginBottom:10,color:'#ffffff',fontSize:20,}}
      placeholder="password"
      placeholderTextColor={"#ffffff"}
      onChangeText={(e)=> onChange("password",e)}
      value={password}
      secureTextEntry={true}
      /> 
     </View>
      <Login/>
      
      <View style={styles.fixToText}>
        <Reig/>
        <Find/>
      </View>
      <Text style={{color: 'gray',fontSize:10}}>------------------SNS 계정 로그인------------------</Text>
      <Kakao/>
      <Google/>
    </View>
    </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C2F40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputId : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    marginBottom:10,
    marginTop:60,
    width:250,
    height: 50,
    color:'#ffffff',
    fontSize:20,
    display:'flex',
    flexDirection: 'row',
  },
  inputPassword : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    marginBottom:10,
    width:250,
    height: 50,
    color:'#ffffff',
    fontSize:20,
    display:'flex',
    flexDirection: 'row',
  },


});

export default LoginPage;