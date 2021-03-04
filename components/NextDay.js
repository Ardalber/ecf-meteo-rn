import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();




const NextDay = (props) => {
    return (
        <View style={styles.container} >
            <View style={styles.boxLeft}>
                <Image style={styles.nextDayIcon} source={{ uri: `http://openweathermap.org/img/wn/${props.icon}@2x.png` }} />
            </View>
            <View style={styles.boxCenter}>
                <Text style={styles.date}> {date} {month} {year} </Text>
                <Text style={styles.desc}>{props.desc}</Text>
            </View>
            <View style={styles.boxRight}>

            </View>


        </View>
    )
}

export default NextDay

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        backgroundColor: 'pink',
        height: 30,
        width: 120,

    },
    nextDayIcon: {
        width: 30,
        height: 30,
    },
    boxLeft: {
        widht: 30,
    },
    boxCenter: {
        widht: 60,
        display: 'flex',
        flexDirection: 'column',

    },
    boxRight: {
        width: 30,
    },
    date: {
        marginTop: 2,
        fontSize: 13,

    },
    desc: {
        fontSize: 5,
        marginLeft: 3,
    }


})
