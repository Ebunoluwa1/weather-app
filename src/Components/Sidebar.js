import React,{ useContext } from 'react';
import { StyledSidebar } from './styles/Sidebar.styled';
import { WeatherContext } from '../Contexts/WeatherContext';


function Sidebar({ searchPlace, setSearchPlace }) {

 const { data, location, setLocation, getLocation, date, month, day } = useContext(WeatherContext);

 
    
  return (
     
      <StyledSidebar > 
               
            <div className='sidebar-header'>
       
              <div className='sidebar__button' onClick={() => setSearchPlace('search')}>
                 Search for places
              </div>
              
              <span className="material-symbols-outlined">
              my_location
              </span>

            </div>

              <>
                 <div className='sidebar__image img'>
                    <img src={'https://raw.githubusercontent.com/JuanAynose/weather-app-devchallenges/main/assets/images/Cloud-background.png'} alt='bg' className='bg'  width='300'
                      height='100' />
                      {data.name != undefined &&
                        <img             
                        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt='/' className='cloud-icon'/> }
                 </div> 
                 
                 <div className='sidebar__temp'>
                   {data.main ? <h1> {(data.main.temp).toFixed(0)} &deg;C</h1> : null}
                 </div>
       
                 <div className='sidebar__weatherName'>
                   {data.weather ? <h1>{data.weather[0].main}</h1> : null}
                 </div>
       
                 <div className='sidebar__date'>
                   Today . {day}, {date} {month} 
                 </div>
       
                 <div className='sidebar__location'>
                      <span className="material-symbols-outlined">
                     add_location  
                     </span>
                     {data.name}
                 </div>
                 </>
        
            </StyledSidebar> 
    
  )
}

export default Sidebar

 //     onClick={() => {navigator.geolocation.getCurrentPosition( (position) => {
      //     setLocation({
      //     lat: position.coords.latitude,
      //     lng:  position.coords.longitude,
      //   });
      //  },
      //  () => null);
      //   }}