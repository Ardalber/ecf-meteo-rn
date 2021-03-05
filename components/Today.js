import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();




const Today = (props) => {

  return (


    <View style={styles.boxToday}>

      <View>

        <Text style={styles.date}> {date} {month} {year} </Text>
      </View>
      <View style={styles.biBox} >
        <View style={styles.boxLeft} >
          <Text style={styles.txt}>{props.tmax}°</Text>
          <Text style={styles.tmin}>{props.tmin}°</Text>

        </View>

        <View style={styles.boxRight} >
          <Image style={styles.icon} source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }} />
          <Text style={styles.desc}>{props.desc}</Text>
          <View>

          </View>
        </View>


      </View>
    </View>

  )
}

export default Today

const styles = StyleSheet.create({
  boxToday: {
    margin: 5,
    width: 120,
    height: 55,
    backgroundColor: 'blue',
  },
  date: {
    paddingLeft: 3,
    paddingTop: 5,
    backgroundColor: 'blue',
    width: 50,
    height: 15,
    fontSize: 8,
    color: 'white',

  },
  biBox: {
    widht: 200,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxLeft: {
    height: 40,
    widht: 100,
    backgroundColor: 'blue',
  },
  boxRight: {
    backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'blue',
    alignItems: 'right',
    height: 40,
    width: 45,
    marginTop: -12,
    marginRight: 5,
  },
  desc: {
    backgroundColor: 'blue',
    textAlign: 'center',
    marginRight: -5,
    marginTop: 0,
    fontSize: 7,
    color: 'white',
  },
  txt: {
    fontSize: 10,
    marginLeft: 5,
    marginTop: 5,
    color: 'white',

  },
  tmin: {
    fontSize: 6,
    marginLeft: 5,
    marginTop: 5,
    color: 'white',

  },
  icon: {
    marginLeft: 5,
    width: 40,
    height: 40,

  }

});