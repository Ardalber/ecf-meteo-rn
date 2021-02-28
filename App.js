import React, { useState, useEffect } from 'react'; // Les deux hooks d'effets
import Today from './components/Today';
import { StyleSheet, Text, View } from 'react-native'; // utiliser de l'API StyleSheet
import axios from 'axios'; // On importe Axios, librairie asynchrone client HTTP qui permet de récupérer et d'afficher les données provenant d'une API.


export default function App(props) {
  const [date, setDate] = useState([]);
  const [tempMax, setTempMax] = useState([]);
  const [tempMin, setTempMin] = useState([]);
  const [icon, setIcon] = useState([]);
  const [desc, setDesc] = useState([]);
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=348423add36511b1c1c01fcbd408e1bb`)
      .then(res => {
        
        setDate(res.data.daily[0].dt)
        setTempMin(res.data.daily[0].temp.min);
        setTempMax(res.data.daily[0].temp.max);
        setDesc(res.data.current.weather[0].main)
        
      })
  }, []);
  return (
    <View style={styles.container}>
      <Today tmax={tempMax} tmin={tempMin} date={date} ></Today>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  },
});