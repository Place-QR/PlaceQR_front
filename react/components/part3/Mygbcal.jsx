import React, { Component } from 'react'
import {StyleSheet,View,Text,Image} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import { ScrollView } from 'react-native';
import RNCalendarEvents from "react-native-calendar-events";
import Icon from 'react-native-vector-icons/AntDesign';
//import EventCalendar from 'react-native-events-calendar';
import moment from 'moment';

LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


class Mygbcal extends Component {
  state={
    selectedDate: '',
  }
  render() {
    getSelectedDayEvents = date => {
      let markedDates = {};
      markedDates[date] = { selected: true, color: '#FFBA93', borderRadius:10,width:41,height:36,justifyContent:'center',margin:3 };
      let serviceDate = moment(date);
      serviceDate = serviceDate.format("DD.MM.YYYY");
      this.setState({
          selectedDate: serviceDate,
          markedDates: markedDates
      });
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

            <View style={{width:355,height:400,}}>
              <View style={{width:355,height:400,alignItems:'center'}}>
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
                    todayTextColor: '#00adf5',
                    arrowColor: '#4D5A73',
                    arrowWidth:'bold',

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
                    height:380,
                    borderRadius:10,
                    backgroundColor:"#ffffff"
                  }}
                  // Initially visible month. Default = Date()
                  current={'2023-01-24'}
                  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                  minDate={'2023-01-01'}
                  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                  maxDate={'2023-12-31'}
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
                  hideExtraDays={true}
                  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                  // day from another month that is visible in calendar page. Default = false
                  disableMonthChange={true}
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
                  disableAllTouchEventsForDisabledDays={true}
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
            {/* <Agenda
            items={agenda.items}
            // Initially selected day
            selected={date}
            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
            minDate={today}
            // Specify how each item should be rendered in agenda
            renderItem={(item, firstItemInDay) => {
                return <View>
                  <View style={{width:355,height:33,alignItems:'center',justifyContent:'center', display:"flex",flexDirection:'row'}}>
                    <PlanningCard style={styles.appointmentCard}
                    hour={String(moment.unix(item.date).format("H[h]mm"))}
                    ></PlanningCard>

                      <View style={styles.line}></View>
                      <Text style={[styles.infotext,{color:'#2C2F40'}]}>\(item.date)</Text>
                      <View style={styles.line}></View>
                    
                  </View>
                </View>;
            }}
            /> */}
            
            <View style={{width:355,height:218,alignItems:'center',paddingTop:10}}>
              <ScrollView>
                <View style={styles.back3}>
                  <View style={[styles.place,{zIndex:1}]}>
                    <Text style={styles.placename}>희영이집</Text>
                  </View>
                  <View style={[styles.back4,{marginTop:-20}]}>
                    <View style={{width:275,height:118,alignItems:'center',marginTop:10}}> 
                      <Text style={[styles.infotext,{color:'#626262'}]}>고양이가 너무 귀여워여</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.back3}>
                  <View style={[styles.place,{zIndex:1}]}>
                    <Text style={styles.placename}>희영이집</Text>
                  </View>
                  <View style={[styles.back4,{marginTop:-20}]}>
                    <View style={{width:275,height:118,alignItems:'center',marginTop:10}}> 
                      <Text style={[styles.infotext,{color:'#626262'}]}>고양이가 너무 귀여워여</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.back3}>
                  <View style={[styles.place,{zIndex:1}]}>
                    <Text style={styles.placename}>희영이집</Text>
                  </View>
                  <View style={[styles.back4,{marginTop:-20}]}>
                    <View style={{width:275,height:118,alignItems:'center',marginTop:10}}> 
                      <Text style={[styles.infotext,{color:'#626262'}]}>고양이가 너무 귀여워여</Text>
                    </View>
                  </View>
                </View>
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
    backgroundColor:"#2c2f40",
    //padding:19,
    //paddingLeft:6,
    //marginBottom:35,
    //borderRadius:10,
    marginLeft:5,
    marginRight:5,
    width: 123,
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