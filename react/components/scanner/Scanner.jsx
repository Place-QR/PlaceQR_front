import React, { useState, useEffect } from "react";
import {StyleSheet, View, Text, Button, TouchableOpacity, Image, Platform } from "react-native";
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Linking from 'expo-linking';

function Scan({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type "${type}" and data "${data}" has been scanned!`);
    // Linking.openURL(`${data}`);
    // navigation.navigate('Scanned');
    // const scanData = `${data}`
    const check = data.substring(15,22);
    
    //place qr의 qr코드만 인식
    if(check == 'qrplace') {
      navigation.navigate('Scanned',{scanData:`${data}`});
      // 페이지 이동과 함께 qr code 데이터 넘김
    }
    else {
      Linking.openURL(`${data}`);
    }


  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            style={styles.scanner}
          >
            {/* {scanned && <Button title={"Tap to Scan Again"} onPress={()=> setScanned(false)} />} */}
            {/* <View style={styles.scannerInner} /> */}
          </BarCodeScanner>
          <Image 
            source={require("../../assets/scannerIMG3.png")}
            resizeMode="center"
            style={{
              width:'100%',
              height:'100%',
              position: 'absolute',
            }}
          />
        </View>
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
        {/* <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate('Scanned')}>
            <Text style={styles.text}>  QR인식  </Text>
        </TouchableOpacity> */}
        <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => setScanned(false)}>
            <Text style={styles.text}>  QR인식  </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    //   justifyContent: 'center',
    },
    scannerContainer: {
      width: '95%',
      height: '70%',
      borderRadius: 15,
      borderStyle: 'solid',
      borderColor: '#2C2F40',
      borderWidth: 10,
      
    },
    scanner: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin:0,
        backgroundColor: '#DAD8D8',
        // borderStyle: 'solid',
        // borderColor: '#4D5A73',
        // borderWidth: 10,
        // borderRadius: 25,
        justifyContent: 'center',
        alignItems:'center',
    },
    scannerInner: {
      width:'95%', 
      height: '95%', 
      borderColor:'#000', 
      borderWidth:10,
      // position: 'absolute',
      borderRadius: 20,
    },
    button: {
        widht: Platform.select({ios:100, android:100}),
        height: Platform.select({ios:130, android: 100}),
        backgroundColor: '#2C2F40',
        // borderColor: '#2F2F40',
        // borderWidth: 10,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 30,
        position:'absolute',
        zIndex:10,
        bottom: 50,
    },
    text: {
        color: '#fff',
        fontSize: Platform.select({ios:30, android: 20}),
        fontWeight: 'bold',
    }
});


export default Scan;
