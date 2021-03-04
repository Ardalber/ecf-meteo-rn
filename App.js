import React, { useState, useEffect } from 'react'; // Les deux hooks d'effets
import Today from './components/Today';
import { StyleSheet, Text, View, Image } from 'react-native'; // utiliser de l'API StyleSheet
import axios from 'axios'; // On importe Axios, librairie asynchrone client HTTP qui permet de récupérer et d'afficher les données provenant d'une API.
import NextDay from './components/NextDay';


export default function App() {

  const [tempMax, setTempMax] = useState([]);
  const [tempMin, setTempMin] = useState([]);
  const [desc, setDesc] = useState([]);
  const [icon, setIcon] = useState([]);
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=348423add36511b1c1c01fcbd408e1bb`)
      .then(res => {

        setTempMin(res.data.daily[0].temp.min);
        setTempMax(res.data.daily[0].temp.max);
        setDesc(res.data.current.weather[0].main);
        setIcon(res.data.daily[0].weather[0].icon);
      })
  }, []);

  return (
    <View style={styles.container}>
      <Today tmax={tempMax} tmin={tempMin} desc={desc} icon={icon}></Today>
      <NextDay
        icon={icon}
        desc={desc}
        

      ></NextDay>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    width: 450,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  },

});