import { StatusBar } from 'expo-status-bar';
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableWithoutFeedback, Keyboard,Button, Platform,TouchableOpacity,BackHandler} from 'react-native';
import axios from 'axios';
import {AsyncStorage}from 'react-native';

const LoginPage = ({navigation}) => {

  const handlePressBack = () => {
    if(navigation?.canGoBack()) {
        navigation.goBack()
        return true
    }
    return false
};
useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handlePressBack)
    return () => {
        BackHandler.removeEventListener('hardwareBackPress', handlePressBack)
    }
},[handlePressBack]);

  const [inputs, setInputs] = React.useState({
    username:"",
    email:"",
    password1:"",
    password2:"",

    //Id:"", password:"", passwordcheck:"" ,name:"", eMail:"",
});

const onSubmitFormHandler = async () => {
  
  try {
   await axios.post("https://www.placeqr.store/users/dj-rest-auth/registration/", {
    username:"jjasjuaas",
    email:"sjqwass@naver.com",
    password1:"1q2w3as4ra!!!",
    password2:"1q2w3as4ra!!!"

    // Id:`${input.Id}`, password:`${input.password}, passwordcheck:`${input.passwordcheck}`, name: `${input.name}`,eMail:`${input.eMail}`
    }
   
    
    );
   
  } catch (error) {
    console.log(error);
  }
};

const {Id, password,passwordcheck,name,eMail} = inputs;

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

<Text style={{color: 'white',fontSize:15,marginBottom:2}}>이메일</Text>  
       <TextInput 
      style={styles.inputPassword3}
      placeholderTextColor={"#ffffff"}
      onChangeText={(e)=> onChange("eMail",e)}
      value={eMail}
      />
      </View>
      <View style={styles.fixToText}>
      <TouchableOpacity onPress={()=>{onSubmitFormHandler(); handlePressBack();}}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{borderWidth:1 ,borderColor:'white',backgroundColor: '#2C2F40',padding:10, borderRadius:15,width:100, alignItems:"center",
    justifyContent: 'center' , marginBottom:1, marginTop:30}}>
                <Text style={{fontSize:20, color:'white'}}>가입하기</Text>
            </View>
        </TouchableOpacity>
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