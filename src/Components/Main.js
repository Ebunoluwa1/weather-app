import React, { useContext, useEffect, useState} from 'react';
import { WeatherContext } from '../Contexts/WeatherContext';
import { StyledMain } from './styles/Main.styled';
import axios from 'axios';

function Main() {
  const [forecast, setForecast] = useState('')

const { data, location, latitude, longitude, date, month, day } =useContext(WeatherContext);



const getForecast =  () => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=d8f1a2109141f16d587e8681c2f6aab4&units=metric`).then((response) => {
        setForecast(response.data)
        console.log(response.data)
                })
    }



    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));


  return (
    <StyledMain>
        <div className='main__wrapper'>
                <div className='main-header'>
                {/* ${celsius && 'inactive'} */}
                    <span className={`units 
        `}> &deg; C</span>
                    <span className={`units 
        `}> &deg; F</span>
                </div>


                <>
                <div className='main__cardWrapper'>
                    <div className='cards'>
                
                        {/* {data.list.map(  
                        (item, idx) => ( */}


                            <div className='main__card'>
                                <label>Tomorrow
                                </label>
                                <br />
                                <span className='img'>
                                    {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/>
                                    <img src='cloud-backgound.png' alt='cloud/icons' /> */}
                                </span> 

                            <div className='temp'>
                                <span className='min'> {data.main ? <h3> {(data.main.temp_max).toFixed(0)} &deg;C</h3> : null} </span>
                                <span className='max'> {data.main ? <h3> {(data.main.temp_min ).toFixed(0)} &deg;C</h3> : null} </span>
                            </div> 
                        </div> 
                        
                        <div className='main__card'>
                                <label>Tomorrow</label>
                                    <br />
                                <span className='img'>
                                    {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/> */}
                                    <img src='cloud-backgound.png' alt='cloud/icons' />
                                </span> 

                            <div className='temp'>
                                <span className='min'> {data.main ? <h3> {(data.main.temp_max).toFixed(0)} &deg;C</h3> : null} </span>
                                <span className='max'> {data.main ? <h3> {(data.main.temp_min ).toFixed(0)} &deg;C</h3> : null} </span>
                            </div> 
                        </div> 
                        
                        <div className='main__card'>
                                <label>Tomorrow</label>
                                <br />
                                <span className='img'>
                                    {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/> */}
                                    <img src='cloud-backgound.png' alt='cloud/icons' />
                                </span> 

                            <div className='temp'>
                                <span className='min'> {data.main ? <h3> {(data.main.temp_max).toFixed(0)} &deg;C</h3> : null} </span>
                                <span className='max'> {data.main ? <h3> {(data.main.temp_min ).toFixed(0)} &deg;C</h3> : null} </span>
                            </div> 
                        </div> 
                        
                        <div className='main__card'>
                                <label>Tomorrow</label>
                                <br />
                                <span className='img'>
                                    {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/> */}
                                    <img src='cloud-backgound.png' alt='cloud/icons' />
                                </span> 

                            <div className='temp'>
                                <span className='min'> {data.main ? <h3> {(data.main.temp_max).toFixed(0)} &deg;C</h3> : null} </span>
                                <span className='max'> {data.main ? <h3> {(data.main.temp_min ).toFixed(0)} &deg;C</h3> : null} </span>
                            </div> 
                        </div>
                        
                        <div className='main__card'>
                                <label>Tomorrow</label>
                                <br />
                                <span className='img'>
                                    {/* <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}/> */}
                                    <img src='cloud-backgound.png' alt='cloud/icons' />
                                </span> 

                            <div className='temp'>
                                <span className='min'> {data.main ? <h3> {(data.main.temp_max).toFixed(0)} &deg;C</h3> : null} </span>
                                <span className='max'> {data.main ? <h3> {(data.main.temp_min ).toFixed(0)} &deg;C</h3> : null} </span>
                            </div> 
                        </div> 
                    </div>

                        {/* ))}  */}
                

                    <div className='main__highlights'>
                        <h3> Today's Highlights</h3>
                    <div className= 'card__highlight'>

                            <div className='Highlight'>
                                <div className='main__cardHighlight'>
                                    <p>Wind Status</p>
                                    
                                    <div> 
                                        <h1>7</h1>  <span>mph  </span>
                                    </div>
                                    
                                    <div>
                                        <span class="material-symbols-outlined">
                                        navigation
                                        </span> 
                                        <aside> WSW</aside>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='Highlight'>
                                <div className='main__cardHighlight'>
                                    <p>Humidity</p>
                                    <div>
                                        <h1> 84</h1>
                                        <span> %</span>
                                    </div>

                                    <div className='highlight__icon'>
                                        <div> 
                                            <p>0</p>
                                            <p>50</p>
                                            <p>100</p>
                                        </div>
                                    <main></main>
                                    <small>%</small>
                                    </div>
                                </div>
                            </div>

                            <div className='Highlight'>
                                <div className='main__cardHighlight'>
                                    <p>Visibility</p>
                                        <div>
                                            <h1>6,4</h1>
                                        <span>miles</span>
                                    </div>
                                </div>
                            </div>

                            <div className='Highlight'>
                                <div className='main__cardHighlight'>
                                    <p>Air pressure</p>
                                    <div>
                                    <h1>998</h1>
                                    <span>mb</span></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </>
        </div>
    </StyledMain>
  );
};

export default Main