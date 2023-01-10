import React from "react";
import {StyleSheet, View, Text, Platform, TextInput, Image,TouchableWithoutFeedback, TouchableOpacity,Keyboard } from "react-native";

function Write({navigation}) {
    // const [text, onChangeText] = React.useState("");
    const [inputs, setInputs] = React.useState({
        name: '',
        relation: '',
        phone: '',
        talk: '',
    });

    const {name, relation, phone, talk} = inputs;

    const onChange = (keyvalue, e) => {
        setInputs({
            ...inputs,
            [keyvalue]: e
        });
    };
  return (
      <View style={styles.container}>
        <Image
            style={{
                width:'100%', 
                height:'40%', 
                position:'absolute', 
                zIndex:2,
                bottom:-55,
            }}
            source={require("../../assets/PQRbackIMG4.png")}
            resizeMode="center"
            />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.formContainer}>
                <Text style={styles.placeTitle}>OOO의 집</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={(e) => onChange("name", e)}
                    value={name}
                    returnKeyType="next"
                    placeholder="이름"
                    placeholderTextColor="#cfcfcf"
                    textAlign="left"
                    />
                <TextInput 
                    style={styles.input}
                    onChangeText={(e) => onChange("relation", e)}
                    value={relation}
                    returnKeyType="next"
                    placeholder="관계"
                    placeholderTextColor="#cfcfcf"
                    textAlign="left"
                    />
                <TextInput 
                    style={styles.input}
                    onChangeText={(e) => onChange("phone", e)}
                    value={phone}
                    returnKeyType="next"
                    placeholder="연락처"
                    placeholderTextColor="#cfcfcf"
                    textAlign="left"
                    />
                <TextInput 
                    style={styles.longInput}
                    onChangeText={(e) => onChange("talk", e)}
                    value={talk}
                    // returnKeyType="next"
                    placeholder=" 남기고 싶은 말 &#13;(방문하게 된 소감 등)"
                    placeholderTextColor="#cfcfcf"
                    textAlign="left"
                    multiline={true}
                    />
            </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={() => navigation.navigate('Scanned')}>
            <Text style={styles.WhiteText}> 등록하기 </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    formContainer: {
        width: 350,
        height: 550,
        backgroundColor: '#4D5A73',
        // marginTop: 5,
        alignItems: 'center',
        borderRadius: 20,
        ...Platform.select({
            ios: {
                shadowColor: "rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: 10,
                    width: 10,
                },
            },
            android: {
                elevation: 3,
            }
        }),
        position:'absolute',
        zIndex:10,
    },
    placeTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 15,
        marginBottom: 20,
    },
    input: {
        width: 297,
        height: 60,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#cfcfcf',
        backgroundColor: '#fff',
        margin: 0,
        marginBottom: 12,
        padding: 0,
        paddingLeft: 15,
        borderRadius: 15,
    },
    longInput: {
        width: 297,
        height: 210,
        fontSize: 20,
        fontWeight: 'bold',
        color:'#cfcfcf',
        backgroundColor: '#fff',
        margin: 0,
        marginBottom: 12,
        padding: 0,
        paddingLeft: 15,
        paddingTop: 15,
        borderRadius: 15,
        textAlignVertical:"top",
    },
    submitBtn: {
        width: 250,
        height: 65,
        backgroundColor: '#4D5A73',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 20,
        position: 'absolute',
        bottom: 30,
        zIndex: 10,
    },
    WhiteText:{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
  });

export default Write;