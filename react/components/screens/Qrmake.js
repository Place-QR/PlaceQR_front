import React ,{useEffect,useState}from 'react';
import {StyleSheet, Text, View ,TextInput,Button,TouchableWithoutFeedback,Keyboard,Image,TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Home = (route) => {
  //const scanData = route.params.scanData;
  const navigation = useNavigation();


    const [inputs, setInputs] = React.useState({
        place: '',
        p_i: '',
    });
    
    const {place, p_i} = inputs;
    
        const onChange = (keyvalue, e) => {
            setInputs({
                ...inputs,
                [keyvalue]: e
            });
        };

        const deleteImage = async () =>{
          setImageUrl(null);
        }

        const [imageUrl, setImageUrl] = useState('');
        const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

        const uploadImage = async () => {
             if(!status?.granted) {
                   const permission = await requestPermission();
                  if(!permission.granted) {
                       return null;
                   }
             } // 권한 확인 코드

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
                   setImageUrl(result.assets[0].uri);};
                   
                   const postTest = async() => {
                    try{
                         /*//서버에 요청 보내기
                         const localUri = result.assets[0].uri;
                         const filename = localUri.split('/').pop();
                         const match = /\.(\w+)$/.exec(filename ?? '');
                         const type = match ? `image/${match[1]}` : `image`;
                         const formData = new FormData();
            
                         let dataset = {
                            name:`${inputs.p_i}`,
                            description: `${inputs.place}`,
                            owner: null,
                             //place: `${placeID}`
            
                         }      
                         formData.append("data", JSON.stringify(dataset)); // JSON 형식으로 파싱 후 추가
                         formData.append("photo", {uri: localUri, name: filename, type});
             
                          await axios({
                             method: "POST",
                             url:'https://www.placeqr.store/places/',
                             headers: {
                                "content-type": "multipart/form-data",
                             },
                              data: formData
                          })*/
                          await axios.post("https://www.placeqr.store/places/", {
                            description: "아마",
                            name: "도~",
                            owner: 1
                          })
                          
          }
          catch(e){
              console.log(e);
        }}
        

                       
      




  return (
    <View style={styles.container}>
      <Image
            style={{
                width:'100%', 
                height:'40%', 
                position:'absolute', 
               
                bottom:-55,
            }}
            source={require("../../assets/PQRbackIMG4.png")}
            resizeMode="center"
            />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>

      
      <View style={styles.container2}>
      <TextInput 
      style={styles.inputId}
      placeholder="장소 이름"
      placeholderTextColor={"gray"}
      onChangeText={(e)=> onChange("place",e)}
      value={place}
      />
      <TextInput 
      style={styles.inputId2}
      placeholder="장소 소개"
      placeholderTextColor={"gray"}
      onChangeText={(e)=> onChange("p_i",e)}
      value={p_i}
      textAlignVertical="top"
      multiline={true}
      />
      <View style={styles.fixToText}>
      <TouchableOpacity onPress={() => {uploadImage();}}>
        <MaterialIcons name="insert-photo" size={24} color="gray" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{deleteImage();}}>
        <MaterialIcons name="close" size={24} color="gray" />
      </TouchableOpacity>
      </View>
      {imageUrl && <Image source={{uri: imageUrl}} style={{width:100, height:100,marginRight:200, marginTop:10 }}/>}
      </View>
      
      <TouchableOpacity onPress={() => {navigation.navigate('Qrpage'); postTest();}}
        //hitSlop={{ bottom:100, top:100, left:100, right:100}}
        pressRetentionOffset={{ bottom:10, top:10, left:10, right:10}}
        >
            <View style={{backgroundColor: '#2C2F40',padding:10, borderRadius:15,width:200, alignItems:"center",
    justifyContent: 'center' , marginBottom:60, marginTop:30, height:60}}>
                <Text style={{fontSize:30, color:'white'}}>생성하기</Text>
            </View>
        </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,
        alignItems: 'center',
    justifyContent: 'center',
   
      }, 
    container2: {
   borderWidth: 1,
   borderColor: '#2C2F40',
   backgroundColor: '#2C2F40',
   borderRadius:10,
   alignItems: 'center',
   
    width:350,
    height:550,
  },
  inputId : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    marginTop:50,
    marginBottom:30,
    width:300,
    height: 50,
    color:'black',
    fontSize:20,
    backgroundColor:'white',
  },
  inputId2 : {
    borderRadius:15,
    borderWidth: 1,
    borderColor:'#ffffff',
    padding:10,
    width:300,
    height:250,
    color:'black',
    fontSize:20,
    backgroundColor:'white'},

    container3 : {
    backgroundColor: '#2C2F40',
    alignItems: 'center',
    justifyContent: 'center',
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight:250,
      marginTop:5,
    },
});

export default Home; 