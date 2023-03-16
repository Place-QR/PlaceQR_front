import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableWithoutFeedback, Keyboard,Button, Platform, BackHandler, TouchableOpacity} from 'react-native';
import R_Regi from '../buttons/R_Regi';

//firebase추가
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from '../../firebaseConfig';
// import FirebaseLogin from './FirebaseLogin';

function FirebaseRegister({navigation}) {

    // const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    const creatAccount = async() => {
        try {
            if(password === confirmPassword){
                await createUserWithEmailAndPassword(FirebaseAuth, email, password);
                console.log("Success!");
            }
            else {
                setError('비밀번호가 일치하지 않습니다');
            }
        }
        catch (e) {
            setError('There was a problem creating your account');
        }
    };

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

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
        
                <Text style={{color: 'white',fontSize:52,marginBottom:50}}>Place.QR</Text>
                <StatusBar style="auto" />
                
                <View style={styles.a} >
                    <Text style={{color: 'white',fontSize:15 ,marginBottom:2}}>이메일</Text>  
            
                    <TextInput 
                        style={styles.inputId}
                        placeholderTextColor={"#ffffff"}
                        onChangeText={setEmail}
                        value={email}
                        onEndEditing={() => console.log("onEndEditing")}
                        onSubmitEditing={() => console.log("onSubmitEditing")}
                        keyboardType='email-address'
                    />
                    <Text style={{color: 'white',fontSize:15,marginBottom:2}}>비밀번호</Text>  
                    <TextInput 
                        style={styles.inputId}
                        placeholderTextColor={"#ffffff"}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    
                    />
            
                    <Text style={{color: 'white',fontSize:15,marginBottom:2}}>비밀번호 확인</Text>  
                    <TextInput 
                        style={styles.inputId1}
                        placeholderTextColor={"#ffffff"}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                        secureTextEntry={true}
                    />
                    <View>
                        <Text style={{color:'red',fontSize:10,marginLeft:5,marginBottom:13}}>
                            {(()=>{
                            if(password === confirmPassword) return "";
                            else return "비밀번호가 일치하지 않습니다.";
                            })()}
                        </Text>
                        <Text style={{color: 'white',fontSize:10,marginBottom:10}}>--------------------------------------------------------------</Text>
                    </View>
            
                    <Text style={{color: 'white',fontSize:15,marginBottom:2}}>이름</Text>  
                    <TextInput 
                        style={styles.inputPassword}
                        placeholderTextColor={"#ffffff"}
                        onChangeText={setName}
                        value={name}
                    />
            
                    {/* <Text style={{color: 'white',fontSize:15,marginBottom:2}}>이메일</Text>  
                    <TextInput 
                        style={styles.inputPassword3}
                        placeholderTextColor={"#ffffff"}
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                    /> */}
                </View>
                <View style={styles.fixToText}>
                    <TouchableOpacity onPress={()=>{creatAccount(); handlePressBack();}}
                        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
                        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
                    >
                    <View style={{
                        borderWidth:1 ,borderColor:'white',backgroundColor: '#2C2F40',padding:10, borderRadius:15,width:100, alignItems:"center",justifyContent: 'center' , marginBottom:1,marginTop:30
                    }}>
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

export default FirebaseRegister;