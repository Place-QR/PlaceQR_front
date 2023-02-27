import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";

export default function QrToRead({ navigation, route }) {
  const scanData = route.params.scanData;

  const [placeData, setPlaceData] = useState();
  const [commentsData, setCommentsData] = useState();
  const [comment, setComment] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${scanData}`);
        setPlaceData(response.data);

        const commentsLoad = await axios.get(`${scanData}` + "/comments/");
        setCommentsData(commentsLoad.data);
      } catch (error) {
        // console.log(error);
      }
    };
    getData();
  }, []);

  // useEffect(() => {
  //   console.log("it's me", commentsData[1].name);
  // }, []);

  const getComment = (e) => {
    console.log("e is: ", e);
    setComment(e);
    console.log(comment);
  }

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "40%",
          position: "absolute",
          zIndex: 0,
          bottom: -55,
        }}
        source={require("../../assets/PQRbackIMG4.png")}
        resizeMode="center"
      />
      <View
        style={{
          width: 344,
          height: 326,
          borderBottomColor: "#000000",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={[styles.place, { zIndex: 1 }]}>
          {placeData && <Text style={styles.placename}>{placeData.name}</Text>}
        </View>
        <View style={[styles.gbback1, { marginTop: -20 }]}>
          <View style={[styles.gbback2]}>
            <View
              style={{
                width: 284,
                height: 35,
                alignItems: "left",
                marginTop: 10,
              }}
            >
              <Text style={[styles.gbtext1, { color: "#626262" }]}>
                {comment.name} , {comment.created_at}
              </Text>
            </View>
            <ScrollView>
              <View style={{ width: 284, height: 156, alignItems: "left" }}>
                <Text style={[styles.gbtext2, { color: "#626262" }]}>
                  {comment.description}
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      <View style={{ width: 344, height: 359 }}>
        <ScrollView>
          {commentsData &&
            commentsData.map((e) => (
              <TouchableOpacity onPress={() => getComment(e)}>
                <View style={styles.guestlist}>
                  <View
                    style={{
                      width: 116,
                      height: 47,
                      marginLeft: 30,
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <View style={{ width: 58, height: 47, paddingTop: 11 }}>
                      <Text style={styles.name}>{e.name}</Text>
                    </View>
                    <View
                      style={{
                        width: 58,
                        height: 47,
                        paddingTop: 19,
                        paddingLeft: 10,
                        alignItems: "left",
                      }}
                    >
                      <Text style={styles.relation}>{e.relation}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: 116,
                      height: 36,
                      marginLeft: 30,
                      paddingTop: 5,
                    }}
                  >
                    <Text style={styles.writetime}>{e.created_at}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // marginTop:Constants.statusBarHeight,
    // marginHorizontal:16,
  },
  gbback1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2C2F40",
    //marginBottom:20,
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius: 10,
    width: 344,
    height: 264,
    // left: 34,
    // top: 129,
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  gbback2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius: 10,
    width: 298,
    height: 206,
    // left: 34,
    // top: 129,
  },
  place: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4D5A73",
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius: 10,
    width: 115,
    height: 35,
    // left: 34,
    // top: 129,
  },
  guestlist: {
    alignItems: "left",
    //justifyContent:"center",
    backgroundColor: "#2C2F40",
    //padding:19,
    //paddingLeft:17,
    marginTop: 17,
    borderRadius: 15,
    width: 337,
    height: 83,
    // left: 34,
    // top: 129,
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  gbtext1: {
    textAlign: "center",
    // paddingVertical:30,
    fontSize: 16,
    //fontFamily:'Ruda',
    fontWeight: "bold",
  },
  gbtext2: {
    textAlign: "center",
    // paddingVertical:30,
    fontSize: 20,
    //fontFamily:'Ruda',
    fontWeight: "bold",
  },
  placename: {
    textAlign: "center",
    color: "#fff",
    // paddingVertical:30,
    fontSize: 24,
    //fontFamily:'Ruda',
    fontWeight: "bold",
  },
  name: {
    textAlign: "center",
    color: "#fff",
    // paddingVertical:30,
    fontSize: 24,
    //fontFamily:'Ruda',
    fontWeight: "bold",
  },
  relation: {
    textAlign: "center",
    color: "#fff",
    // paddingVertical:30,
    fontSize: 16,
    //fontFamily:'Ruda',
    fontWeight: "Bold",
  },
  writetime: {
    textAlign: "center",
    color: "#fff",
    // paddingVertical:30,
    fontSize: 16,
    fontWeight: "normal",
    //fontFamily:'Ruda',
    //fontWeight:'bold',
  },
});
