import React, { Component, useEffect, useState } from 'react'
import {StyleSheet,View,Text,Image} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { ScrollView } from 'react-native';
import RNCalendarEvents from "react-native-calendar-events";
import Icon from 'react-native-vector-icons/AntDesign';
//import EventCalendar from 'react-native-events-calendar';
import moment from 'moment';
import axios from 'axios';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


class Mygbcal extends Component {
  constructor(props){//state 초기값 지정
  super(props);
    this.state = { //created_at,place,description
      gbinfo: [],
    }
  }
  // setGuestbook = ()=>{
  //   axios.get('https://www.placeqr.store/comments/')
  //   .then((response)=>{
  //       const gbinfo=response.data;
  //       this.setState({gbinfo});

  //   })
  //   .catch((error)=>{console.log('오류',error)});
  // }

  // setGuestbook = async () => {
  //   // 데이터를 가져오는 비동기 함수
  //   const response = await get('https://www.placeqr.store/comments/');
  //   const gbinfo = await response.json();
  //   this.setState({ gbinfo });
  // }

  setGuestbook = async () => {
    try {
      const response = await axios.get('https://www.placeqr.store/comments/');
      const gbinfo = response.data;
      this.setState({ gbinfo });
    } catch (error) {
      console.log('오류',error);
    }
  }
  componentDidMount(){//다 읽고 실행하기 생명주기 1.생성자(constructor)가 먼저 읽어지고 2.render가 읽어지고 3.componentDidMount를 읽음
  this.setGuestbook();
  }
  
  render() {// id 받아오기, useeffect
    const {gbinfo} = this.state;
    getSelectedDayEvents = date => { //format 형식 바꾸기 > state값을 데이터에서 찾기 >  데이터 가져오기
      let markedDates = {};
      markedDates[date] = { selected: true, color: '#FFBA93', borderRadius:10,width:41,height:36,justifyContent:'center',alignItems:'center',margin:3 };
      let serviceDate = moment(date);
      serviceDate = serviceDate.format("YY.MM.DD");
      this.setState({
          selectedDate: serviceDate,
          markedDates: markedDates
      });
    };
    const ifDate = () => {//date가 같으면 true date를 비교해서 아래 return에서 map
      if (this.state.gbinfo.created_at.substring(0,9) == this.state.selectedDate.format("YYYY-MM-DD")) { // item과 item.date, item.date.format이 모두 정의되어 있는지 확인합니다.
        return true;
      }
      return false;
    };
    return (
      <View style={[styles.container]}>
          <Image
                style={{
                    width:'100%', 
                    height:'40%', 
                    position:'absolute', 
                    zIndex:0,
                    bottom:-55,
                }}
                source={require("../../assets/PQRbackIMG4.png")}
                resizeMode="center"
                />
          <View style={styles.back1}>
            <View style={{width:355,height:360,marginTop: 10,}}>
              <View style={{width:355,height:360,alignItems:'center'}}>
                {/* <View style={styles.back2}>               */}
                  <Calendar 
                  // theme={{'stylesheet.day.basic':{'base':{width:338,height:300 }}}}
                  theme={{
                    textMonthFontWeight: 'bold',
                    textMonthFontSize: 20,
                    textDayHeaderFontWeight: 'bold',
                    textDayHeaderFontSize: 25,
                    textDayFontWeight: 'bold',
                    textDayFontSize: 25,
                    dayTextColor: '#000000',
                    textSectionTitleColor: '#565656',
                    selectedDayBackgroundColor: '#FFBA93',
                    todayTextColor: '#FA5B32',
                    //todayBackgroundColor:"#FF998B",
                    arrowColor: '#4D5A73',
                    arrowWidth:'bold',
                    selectedDayTextColor:'#000000',
                    textDisabledColor:"#B7B7B7",

                    'stylesheet.calendar.header': {
                      week: {
                        marginTop: 5,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor:"#ffffff",
                      }
                    },
                  }}
                  style={{
                    width:340,
                    height:350,
                    borderRadius:10,
                    //justifyContent: 'center',
                    backgroundColor:"#ffffff"
                  }}
                  // Initially visible month. Default = Date()
                  current={undefined}
                  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                  //minDate={'2023-01-01'}
                  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                  //maxDate={'2023-12-31'}
                  // Handler which gets executed on day press. Default = undefined
                  onDayPress={(day) => {getSelectedDayEvents(day.dateString);}}
                  // Handler which gets executed on day long press. Default = undefined
                  onDayLongPress={(day) => {getSelectedDayEvents(day.dateString);}}
                  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                  monthFormat={'yyyy MM'}
                  // Handler which gets executed when visible month changes in calendar. Default = undefined
                  onMonthChange={(month) => {console.log('month changed', month)}}
                  // Hide month navigation arrows. Default = false
                  hideArrows={false}
                  // Replace default arrows with custom ones (direction can be 'left' or 'right')
                  renderArrow={(direction) => direction === "left" ? (
                    <Icon name="left" size={20} color="#4D5A73" />
                      ) : (
                    <Icon name="right" size={20} color="#4D5A73" />
                      )
                  }
                  // Do not show days of other months in month page. Default = false
                  hideExtraDays={false}
                  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                  // day from another month that is visible in calendar page. Default = false
                  disableMonthChange={false}
                  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                  firstDay={1}
                  // Hide day names. Default = false
                  hideDayNames={false}
                  // Show week numbers to the left. Default = false
                  showWeekNumbers={false}
                  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                  onPressArrowLeft={substractMonth => substractMonth()}
                  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                  onPressArrowRight={addMonth => addMonth()}
                  // Disable left arrow. Default = false
                  disableArrowLeft={false}
                  // Disable right arrow. Default = false
                  disableArrowRight={false}
                  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                  disableAllTouchEventsForDisabledDays={false}
                  /** Replace default month and year title with custom one. the function receive a date as parameter. */
                  //renderHeader={(date) => {/*Return JSX*/}}
                  // renderHeader={(date) => {
                  //   /*Return JSX*/
                  // }}
                  // Enable the option to swipe between months. Default = false
                  enableSwipeMonths={true}
                  markedDates={this.state.markedDates}
                  // markingType={'custom'}
                  // markedDates={{
                  //   '2023-03-28': {
                  //     customStyles: {
                  //       container: {
                  //         backgroundColor: '#FFBA93',
                  //         borderRadius:10,
                  //         width:41,
                  //         height:36,
                  //         justifyContent:'center',
                  //         margin:3
                  //       },
                  //     }
                  //   },
                  // }}
                  />
                {/* </View> */}
              </View>
            </View>
            <View style={{width:355,height:27,alignItems:'center',flexDirection: 'row'}}>
              <View style={styles.line}></View>
              <Text> </Text>
              <Text style={[styles.infotext,{color:'#FFFFFF'}]}>
                {(() => {
                  if(this.state.selectedDate==null){
                    return moment().format("YY.MM.DD");
                  }
                  else{
                    return this.state.selectedDate;
                  }
                })()}
              </Text>
              <Text> </Text>
              <View style={styles.line}></View>
            </View>
            <View style={{width:355,height:218,alignItems:'center',paddingTop:10}}>
              <ScrollView>
                {this.state.gbinfo.map((e) => (
                  <View style={styles.back3}>
                    <View style={[styles.place,{zIndex:1}]}>
                      <Text style={styles.placename}>{e.place}</Text>
                    </View>
                    <View style={[styles.back4,{marginTop:-20}]}>
                      <View style={{width:275,height:118,alignItems:'center',marginTop:10}}> 
                        <Text style={[styles.infotext,{color:'#626262'}]}>{e.description}</Text>
                      </View>
                    </View>
                  </View>
                    ))
                }
              </ScrollView>
            </View>
        </View>
      </View>
     )
   }
 }
 const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    // marginTop:Constants.statusBarHeight,
    // marginHorizontal:16,
  },
  back1:{
    alignItems:"center",
    backgroundColor:"#4D5A73",
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius:10,
    width: 355,
    height: 688,
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
    })
  },
  back2:{
    alignItems:"center",
    backgroundColor:"#FFF",
    //padding:19,
    //paddingLeft:6,
    marginBottom:35,
    borderRadius:10,
    width: 338,
    height: 340,
    // left: 34,
    // top: 129,
  },
  line:{
    alignItems:"left",
    backgroundColor:"#FFFFFF",
    //padding:19,
    //paddingLeft:6,
    //marginBottom:35,
    //borderRadius:10,
    marginLeft:5,
    marginRight:5,
    width: 122,
    height: 1,
    // left: 34,
    // top: 129,
  },
  back3:{
    alignItems:"center",
    justifyContent:"center",    
    backgroundColor:"#2C2F40",
    marginBottom:20,
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius:10,
    width: 340,
    height: 198,
    // left: 34,
    // top: 129,
  },
  back4:{
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"#FFF",
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius:10,
    width: 300,
    height: 156,
    // left: 34,
    // top: 129,
  },
  place:{
    alignItems:"center",
    justifyContent:"center", 
    backgroundColor:"#4D5A73",
    //padding:19,
    //paddingLeft:17,
    //marginBottom:35,
    borderRadius:15,
    width: 142,
    height: 41,
    // left: 34,
    // top: 129,
  },
  infotext:{
    textAlign:'center',
    // paddingVertical:30,
    fontSize:20,
    //fontFamily:'Ruda',
    fontWeight:'bold',
  },
  placename:{
    textAlign:'center',
    color:"#fff",
    // paddingVertical:30,
    fontSize:24,
    //fontFamily:'Ruda',
    fontWeight:'bold',
  },
})
export default Mygbcal;