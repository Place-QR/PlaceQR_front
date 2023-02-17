import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, Platform, TextInput, Image,TouchableWithoutFeedback, TouchableOpacity, Keyboard,Pressable, BackHandler } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";

function Write({navigation, route}) {
    // const [text, onChangeText] = React.useState("");
    const scanData = route.params.scanData;

    const [inputs, setInputs] = React.useState({
        name: '',
        relation: '',
        phone: '',
        talk: '',
    });

    const [placeData, setPlaceData] = useState();

    useEffect(() => {
        const getData = async () => {
        try {
            const response = await axios.get(`${scanData}`);
            setPlaceData(response.data);
        }
        catch(error) {
            console.log(error);
        }
        };
        getData();
    },[]);

    const {name, relation, phone, talk} = inputs;

    const onChange = (keyvalue, e) => {
        setInputs({
            ...inputs,
            [keyvalue]: e
        });
    };

    //ImagePicker    
    const [imageUrl, setImageUrl] = useState('');
    //현재 이미지 주소

    const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
    // 권한 요청을 위한 hooks

    const uploadImage = async () => {
        if(!status?.granted) {
            const permission = await requestPermission();
            if(!permission.granted) {
                return null;
            }
        } // 권한 확인 코드

        // 이미지 업로드 기능
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            qulity: 1,
            aspect: [1, 1]
        });
        if(result.canceled) {
            return null;
        }
        console.log(result);
        setImageUrl(result.assets[0].uri);

    };

    // const uploadForm = async () => {
    //     // const {name, relation, phone, talk} = values;

    //     // 서버에 요청 보내기
    //     const localUri = result.assets[0].uri;
    //     const filename = localUri.split('/').pop();
    //     const match = /\.(\w+)$/.exec(filename ?? '');
    //     const type = match ? `image/${match[1]}` : `image`;
    //     const formData = new formData();
    //     let dataset = {
    //         // name: inputs.name,
    //         // relation:inputs.relation,
    //         // phone: inputs.phone,
    //         description: "ㄴㄴㅇㅇ",
    //         user:1,
    //         place: 1,
    //     }
    //     formData.append("data", JSON.stringify(dataset)); // JSON 형식으로 파싱 후 추가
    //     // formData.append('photo', {uri: localUri, name: filename, type});
    
    //     await axios({
    //         method: 'post',
    //         url:'https://placeqr.loca.lt/api/v1/comments',
    //         headers: {
    //             'content-type': 'multipart/form-data',
    //         },
    //         data: formData
    //     })
    // };

    const postTest = async() => {
        try{
            // 서버에 요청 보내기
            const localUri = result.assets[0].uri;
            const filename = localUri.split('/').pop();
            const match = /\.(\w+)$/.exec(filename ?? '');
            const type = match ? `image/${match[1]}` : `image`;
            const formData = new formData();

            let dataset = {
                description: `${inputs.talk}`,
                name:`${inputs.name}`,
                relation:`${inputs.relation}`,
                contact:`${inputs.phone}`,
                user: 1,
                place: 1

            }

            formData.append("data", JSON.stringify(dataset)); // JSON 형식으로 파싱 후 추가
            // formData.append('photo', {uri: localUri, name: filename, type});

            await axios({
                method: 'post',
                url:'https://placeqr.loca.lt/api/v1/comments/',
                headers: {
                    'content-type': 'multipart/form-data',
                },
                data: formData
            })

            // await axios.post("https://placeqr.loca.lt/api/v1/comments/", {
            //     description: `${inputs.talk}`,
            //     name:`${inputs.name}`,
            //     relation:`${inputs.relation}`,
            //     contact:`${inputs.phone}`,
            //     user: 1,
            //     place: 1
            // })
        }
        catch(e){
            console.log(e);
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
        {console.log('write '+ scanData)}
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
                {placeData && 
                    <Text style={styles.placeTitle}>{placeData.name}</Text>
                }
                {/* {placeData && 
                    <Text style={styles.placeTitle}>{placeData.pk}</Text>
                } */}
                
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
                >
                    {/* {imageUrl && <Image source={{uri: imageUrl}} style={{width:200, height:200}}/>} */}
                </TextInput>
                {/* <View style={{width:'100%', height:'10%',position:'relative',}}>
                    <Pressable 
                        style={{width:'10%', height:'80%',position:'absolute',
                        left: '8%',}}
                        onPress={uploadImage}
                    >
                        <Image 
                            style={{
                                width:'100%',
                                height:'90%',
                            }}
                            source={require("../../assets/image.png")}
                        />
                        
                    </Pressable>

                </View> */}

            </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8} onPress={() => {handlePressBack();postTest();}}>
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
        width: Platform.select({ios:350, android:340}),
        height: Platform.select({ios:550, android:500}),
        backgroundColor: '#2C2F40',
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
        // position:'absolute',
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
        height: Platform.select({ios:60, android:45}),
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
        height: Platform.select({ios: 210, android: 200}),

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

        flexShrink:1,
    },
    submitBtn: {
        width: 250,
        height: Platform.select({ios: 65, android:50}),
        backgroundColor: '#2C2F40',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: Platform.select({ios:30, android:10}),
        // position: 'absolute',
        bottom: Platform.select({ios:0, android:0}),
        zIndex: 10,
    },
    WhiteText:{
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
    },
  });

export default Write;