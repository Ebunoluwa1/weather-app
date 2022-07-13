import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import { StyledWeather } from './styles/Weather.styled'
import { WeatherContext } from '../Contexts/WeatherContext'
import Main from './Main';
import SearchInput from './SearchInput';



function Weather() {

  //to track our data

  const [latitude, setLatitude ] =useState(0);
  const [longitude, setLongitude ] = useState(0);
  const [location, setLocation] = useState('')
  const [data, setData] = useState({});

  const [ searchPlace, setSearchPlace ] = useState('locations');

 const savePositionToState = (position) =>{
  setLatitude(position.coords.latitude);
  setLongitude(position.coords.longitude);
 };


 const fetchWeather = async (e) => {

      try{
        await window.navigator.geolocation.getCurrentPosition(
          savePositionToState
        );

             const currentWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=d8f1a2109141f16d587e8681c2f6aab4&units=metric`);

             const forecastWeather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=d8f1a2109141f16d587e8681c2f6aab4&units=metric`);
             
               
              setData(currentWeather.data)
              console.log(currentWeather.data)
              setLocation(currentWeather.data.name)
              
            }
       
      catch(err) {
        console.log(err);
      }
 }
   

  


   useEffect(() => {
    fetchWeather()
   }, [latitude,longitude])
    

     // converting kelvin to celsius
    //  let temp = (data.main.temp - 273.15).toFixed(0);
    //  let temp_min = (data.main.temp_min - 273.15).toFixed(0);
    //  let temp_max = (data.main.temp_max - 273.15).toFixed(0);
     
     //date
      let d = new Date();
      let date = d.getDate();
      let month = d.toLocaleString('default', {month: 'long'});
      let day = d.toLocaleString('default', {weekday: 'long'});


  return (
    <StyledWeather>
      <WeatherContext.Provider value={{data, setData, location, setLocation, day, month, date }}>

        {/* sidebar */}
          { searchPlace === 'locations' ? <Sidebar searchPlace={searchPlace} setSearchPlace={setSearchPlace} /> : <SearchInput searchPlace={searchPlace} setSearchPlace={setSearchPlace} /> }
        {/* main */}
        <Main  />
        
      </WeatherContext.Provider>
    </StyledWeather>
  )
}

export default Weather

//      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=d8f1a2109141f16d587e8681c2f6aab4&units=metric`;
//         console.log(location)

//      const getLocation = (e) =>  {
//       if (e.key === 'Enter') {
//         axios.get(url).then ((response) =>{
//           setData(response.data)
//           console.log(response.data)
//         })
//         setLocation('')
//       }
  
//      }