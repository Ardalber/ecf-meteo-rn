import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios'




export default function Today() {
    const [tempMin, setTempMin] = useState([]);
    const [tempMax, setTempMax] = useState([]);
    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=4fb8f57eeca10e6f1b5391392c27142a')
            .then(res => {
                setTempMin(res.data.current.weather[5]);
                setTempMax(res.data.daily[0].temp.max);
                console.log(res.data.daily[0].temp.min);
                
            })
    }, [])


    return (
        <View>
            
            <Text>{tempMax}</Text>
        </View>
    )



}
