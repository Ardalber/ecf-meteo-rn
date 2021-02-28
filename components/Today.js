import React from 'react';
import { StyleSheet, Text, View } from 'react-native'


const Today = (props) => {
  return (


    <View style={styles.boxToday}>
      <View>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View>
        <View>
          <Text style={styles.tmax}>{props.tmax}°</Text>
          <Text style={styles.tmin}>{props.tmin}°</Text>

        </View>


      </View>

      <View style={styles.orga}>
        <View>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" height='25' width='25' alt="" />
        </View>
        <View>


        </View>
      </View>
    </View>


  )
}

export default Today

const styles = StyleSheet.create({
  boxToday: {
    margin: 5,
    width: 100,
    height: 50,
    backgroundColor: 'pink',
  },
  tmax: {
    fontSize: 14,
    marginLeft: 5,
  },
  tmin: {
    fontSize: 8,
    marginLeft: 5,

  },

  date: {
    marginLeft: 5,
    marginTop: 0,
    fontSize: 8,
    width: 100,
  },
  orga: {

  }
});