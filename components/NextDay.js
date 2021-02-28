import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default function Today() {
    const [temp, setTemp] = useState([]);
    useEffect(() => {

        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=4fb8f57eeca10e6f1b5391392c27142a')
            .then(res => {
                console.log(res.data.current.temp);
                setTemp(res.data.current.temp)
            })
    }, [])


    return (
        <View>
            <Text>{temp}</Text>
        </View>
    )



}