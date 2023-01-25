import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableWithoutFeedback, Keyboard,Button, Platform} from 'react-native';
import R_Regi from '../buttons/R_Regi';

const LoginPage = () => {

  const [inputs, setInputs] = React.useState({
    Id: '',
    password: '',
    passwordcheck:'',
    name:'',
    M_number:'',
});

const {Id, password,passwordcheck,name,M_number} = inputs;

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

      <Text style={{color: 'white',fontSize:52,marginBottom:50}}>Place.QR</Text>
      <StatusBar style="auto" />
      
      <View style={styles.a} >
      <Text style={{color: 'white',fontSize:15 ,marginBottom:2}}>아이디</Text>  
  
     <TextInput 
      style={styles.inputId}
      placeholderTextColor={"#ffffff"}
      onChangeText={(e)=> onChange("Id",e)}
      value={Id}
      onEndEditing={() => console.log("onEndEditing")}
      onSubmitEditing={() => console.log("onSubmitEditing")}
      />
       <Text style={{color: 'white',fontSize:15,marginBottom:2}}>비밀번호</Text>  
      <TextInput 
      style={styles.inputId}
      placeholderTextColor={"#ffffff"}
      onChangeText={(e)=> onChange("password",e)}
      value={password}
      secureTextEntry={true}
      
      />

<Text style={{color: 'white',fontSize:15,marginBottom:2}}>비밀번호 확인</Text>  
       <TextInput 
      style={styles.inputId1}
      placeholderTextColor={"#ffffff"}
      onChangeText={(e)=> onChange("passwordcheck",e)}
      value={passwordcheck}
      secureTextEntry={true}
      />
      <View>
      <Text style={{color:'red',fontSize:10,marginLeft:5,marginBottom:13}}>{(()=>{
        if(password === passwordcheck) return "";
        else return "비밀번호가 일치하지 않습니다.";
        })()}</Text>
              <Text style={{color: 'white',fontSize:10,marginBottom:10}}>--------------------------------------------------------------</Text>

  </View>

<Text style={{color: 'white',fontSize:15,marginBottom:2}}>이름</Text>  
       <TextInput 
      style={styles.inputPassword}
      placeholderTextColor={"#ffffff"}
      onChangeText={(e)=> onChange("name",e)}
      value={name}
      />

<Text style={{color: 'white',fontSize:15,marginBottom:2}}>전화번호</Text>  
       <TextInput 
      style={styles.inputPassword3}
      placeholderTextColor={"#ffffff"}
      onChangeText={(e)=> onChange("M_number",e)}
      value={M_number}
      />
      </View>
      <View style={styles.fixToText}>
        <R_Regi />
      </View>
    </View>
    </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: Platform.select({ios:1,android:1}),
    backgroundColor: '#2C2F40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'flex_start',
  },
  a:{
    backgroundColor: '#2C2F40',
  },

  inputId : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    marginBottom:15,
    width:300,
    height: 50,
    color:'#ffffff',
    fontSize:20,
  },
  inputPassword : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    marginBottom:15,
    width:300,
    height: 50,
    color:'#ffffff',
    fontSize:20,
  },
  inputPassword1 : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    width:300,
    height: 50,
    color:'#ffffff',
    fontSize:20,
  },
  inputPassword3 : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
   
    width:300,
    height: 50,
    color:'#ffffff',
    fontSize:20,
  },
  inputId1 : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    marginBottom:5,
    width:300,
    height: 50,
    color:'#ffffff',
    fontSize:20,
  },
});

export default LoginPage;