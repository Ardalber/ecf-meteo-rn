import React, { useState, useEffect } from 'react'; // Les deux hooks d'effets
import Today from './components/Today';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'; // utiliser de l'API StyleSheet
import axios from 'axios'; // On importe Axios, librairie asynchrone client HTTP qui permet de récupérer et d'afficher les données provenant d'une API.
import NextDay from './components/NextDay';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr')

export default function App(props) {

  // date----------
  const [dayToday, setDayToday] = useState([]);
  const [numberOfDay, setNumberOfDay] = useState([]);
  const [monthToday, setMonthToday] = useState([]);
  const [year, setYear] = useState([]);

  const [dayToday1, setDayToday1] = useState([]);
  const [numberOfDay1, setNumberOfDay1] = useState([]);
  const [monthToday1, setMonthToday1] = useState([]);
  const [year1, setYear1] = useState([]);

  const [dayToday2, setDayToday2] = useState([]);
  const [numberOfDay2, setNumberOfDay2] = useState([]);
  const [monthToday2, setMonthToday2] = useState([]);
  const [year2, setYear2] = useState([]);

  const [dayToday3, setDayToday3] = useState([]);
  const [numberOfDay3, setNumberOfDay3] = useState([]);
  const [monthToday3, setMonthToday3] = useState([]);
  const [year3, setYear3] = useState([]);

  const [dayToday4, setDayToday4] = useState([]);
  const [numberOfDay4, setNumberOfDay4] = useState([]);
  const [monthToday4, setMonthToday4] = useState([]);
  const [year4, setYear4] = useState([]);

  const [dayToday5, setDayToday5] = useState([]);
  const [numberOfDay5, setNumberOfDay5] = useState([]);
  const [monthToday5, setMonthToday5] = useState([]);
  const [year5, setYear5] = useState([]);

  const [dayToday6, setDayToday6] = useState([]);
  const [numberOfDay6, setNumberOfDay6] = useState([]);
  const [monthToday6, setMonthToday6] = useState([]);
  const [year6, setYear6] = useState([]);

  const [dayToday7, setDayToday7] = useState([]);
  const [numberOfDay7, setNumberOfDay7] = useState([]);
  const [monthToday7, setMonthToday7] = useState([]);
  const [year7, setYear7] = useState([]);




  const [tempMax, setTempMax] = useState([]);
  const [tempMin, setTempMin] = useState([]);
  const [desc, setDesc] = useState([]);
  const [icon, setIcon] = useState([]);

  // initialisation de NextDay
  const [tempMax1, setTempMax1] = useState([]);
  const [tempMin1, setTempMin1] = useState([]);
  const [desc1, setDesc1] = useState([]);
  const [icon1, setIcon1] = useState([]);

  const [tempMax2, setTempMax2] = useState([]);
  const [tempMin2, setTempMin2] = useState([]);
  const [desc2, setDesc2] = useState([]);
  const [icon2, setIcon2] = useState([]);

  const [tempMax3, setTempMax3] = useState([]);
  const [tempMin3, setTempMin3] = useState([]);
  const [desc3, setDesc3] = useState([]);
  const [icon3, setIcon3] = useState([]);

  const [tempMax4, setTempMax4] = useState([]);
  const [tempMin4, setTempMin4] = useState([]);
  const [desc4, setDesc4] = useState([]);
  const [icon4, setIcon4] = useState([]);

  const [tempMax5, setTempMax5] = useState([]);
  const [tempMin5, setTempMin5] = useState([]);
  const [desc5, setDesc5] = useState([]);
  const [icon5, setIcon5] = useState([]);

  const [tempMax6, setTempMax6] = useState([]);
  const [tempMin6, setTempMin6] = useState([]);
  const [desc6, setDesc6] = useState([]);
  const [icon6, setIcon6] = useState([]);

  const [tempMax7, setTempMax7] = useState([]);
  const [tempMin7, setTempMin7] = useState([]);
  const [desc7, setDesc7] = useState([]);
  const [icon7, setIcon7] = useState([]);



  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=348423add36511b1c1c01fcbd408e1bb`)
      .then(res => {

        // date----------
        setDayToday(moment(res.data.daily[0].dt * 1000).format('dddd'))
        setNumberOfDay(moment(res.data.daily[0].dt * 1000).format('DD'))
        setMonthToday(moment(res.data.daily[0].dt * 1000).format('MMM'))
        setYear(moment(res.data.daily[0].dt * 1000).format('yy'))


        setDayToday1(moment(res.data.daily[1].dt * 1000).format('ddd'))
        setNumberOfDay1(moment(res.data.daily[1].dt * 1000).format('DD'))
        setMonthToday1(moment(res.data.daily[1].dt * 1000).format('MMM'))
        setYear1(moment(res.data.daily[1].dt * 1000).format('yy'))

        setDayToday2(moment(res.data.daily[2].dt * 1000).format('ddd'))
        setNumberOfDay2(moment(res.data.daily[2].dt * 1000).format('DD'))
        setMonthToday2(moment(res.data.daily[2].dt * 1000).format('MMM'))
        setYear2(moment(res.data.daily[2].dt * 1000).format('yy'))

        setDayToday3(moment(res.data.daily[3].dt * 1000).format('ddd'))
        setNumberOfDay3(moment(res.data.daily[3].dt * 1000).format('DD'))
        setMonthToday3(moment(res.data.daily[3].dt * 1000).format('MMM'))
        setYear3(moment(res.data.daily[3].dt * 1000).format('yy'))

        setDayToday4(moment(res.data.daily[4].dt * 1000).format('ddd'))
        setNumberOfDay4(moment(res.data.daily[4].dt * 1000).format('DD'))
        setMonthToday4(moment(res.data.daily[4].dt * 1000).format('MMM'))
        setYear4(moment(res.data.daily[4].dt * 1000).format('yy'))

        setDayToday5(moment(res.data.daily[5].dt * 1000).format('ddd'))
        setNumberOfDay5(moment(res.data.daily[5].dt * 1000).format('DD'))
        setMonthToday5(moment(res.data.daily[5].dt * 1000).format('MMM'))
        setYear5(moment(res.data.daily[5].dt * 1000).format('yy'))

        setDayToday6(moment(res.data.daily[6].dt * 1000).format('ddd'))
        setNumberOfDay6(moment(res.data.daily[6].dt * 1000).format('DD'))
        setMonthToday6(moment(res.data.daily[6].dt * 1000).format('MMM'))
        setYear6(moment(res.data.daily[6].dt * 1000).format('yy'))

        setDayToday7(moment(res.data.daily[7].dt * 1000).format('ddd'))
        setNumberOfDay7(moment(res.data.daily[7].dt * 1000).format('DD'))
        setMonthToday7(moment(res.data.daily[7].dt * 1000).format('MMM'))
        setYear7(moment(res.data.daily[7].dt * 1000).format('yy'))




        // Today-------------------
        setTempMin(res.data.daily[0].temp.min);
        setTempMax(res.data.daily[0].temp.max);
        setDesc(res.data.current.weather[0].main);
        setIcon(res.data.daily[0].weather[0].icon);


        // NextDay-------------------------

        setTempMin1(res.data.daily[1].temp.min);
        setTempMax1(res.data.daily[1].temp.max);
        setDesc1(res.data.current.weather[0].main);
        setIcon1(res.data.daily[1].weather[0].icon);

        setTempMin2(res.data.daily[2].temp.min);
        setTempMax2(res.data.daily[2].temp.max);
        setDesc2(res.data.current.weather[0].main);
        setIcon2(res.data.daily[2].weather[0].icon);

        setTempMin3(res.data.daily[3].temp.min);
        setTempMax3(res.data.daily[3].temp.max);
        setDesc3(res.data.current.weather[0].main);
        setIcon3(res.data.daily[3].weather[0].icon);

        setTempMin4(res.data.daily[4].temp.min);
        setTempMax4(res.data.daily[4].temp.max);
        setDesc4(res.data.current.weather[0].main);
        setIcon4(res.data.daily[4].weather[0].icon);

        setTempMin5(res.data.daily[5].temp.min);
        setTempMax5(res.data.daily[5].temp.max);
        setDesc5(res.data.current.weather[0].main);
        setIcon5(res.data.daily[5].weather[0].icon);

        setTempMin6(res.data.daily[6].temp.min);
        setTempMax6(res.data.daily[6].temp.max);
        setDesc6(res.data.current.weather[0].main);
        setIcon6(res.data.daily[6].weather[0].icon);

        setTempMin7(res.data.daily[7].temp.min);
        setTempMax7(res.data.daily[7].temp.max);
        setDesc7(res.data.current.weather[0].main);
        setIcon7(res.data.daily[7].weather[0].icon);





      })
  }, []);
  console.log(Math.round(tempMax))
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Today day={dayToday} numOfDay={numberOfDay} monthToday={monthToday} year={year} tmax={Math.round(tempMax)} tmin={Math.round(tempMin)} desc={desc} icon={icon}></Today>

        <NextDay day={dayToday1} numOfDay={numberOfDay1} monthToday={monthToday1} year={year1} tmax={Math.round(tempMax1)} tmin={Math.round(tempMin1)} icon={icon1} desc={desc1}></NextDay>

        <NextDay day={dayToday2} numOfDay={numberOfDay2} monthToday={monthToday2} year={year2} tmax={Math.round(tempMax2)} tmin={Math.round(tempMin2)} icon={icon2} desc={desc2}></NextDay>

        <NextDay day={dayToday3} numOfDay={numberOfDay3} monthToday={monthToday3} year={year3} tmax={Math.round(tempMax3)} tmin={Math.round(tempMin3)} icon={icon3} desc={desc3}></NextDay>

        <NextDay day={dayToday4} numOfDay={numberOfDay4} monthToday={monthToday4} year={year4} tmax={Math.round(tempMax4)} tmin={Math.round(tempMin4)} icon={icon4} desc={desc4}></NextDay>

        <NextDay day={dayToday5} numOfDay={numberOfDay5} monthToday={monthToday5} year={year5} tmax={Math.round(tempMax5)} tmin={Math.round(tempMin5)} icon={icon5} desc={desc5}></NextDay>

        <NextDay day={dayToday6} numOfDay={numberOfDay6} monthToday={monthToday6} year={year6} tmax={Math.round(tempMax6)} tmin={Math.round(tempMin6)} icon={icon6} desc={desc6}></NextDay>

        <NextDay day={dayToday7} numOfDay={numberOfDay7} monthToday={monthToday7} year={year7} tmax={Math.round(tempMax)} tmin={Math.round(tempMin7)} icon={icon7} desc={desc7}></NextDay>


      </View>
    </ScrollView>

  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'rgb(175, 175, 175)',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'spaceBetween',
  },
});