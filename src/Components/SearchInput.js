import React, { useState, useEffect, useContext } from 'react';
import  { StyledSearchInput } from './styles/SearchInput.styled'
import { WeatherContext } from '../Contexts/WeatherContext';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';


function SearchInput({ searchPlace, setSearchPlace }) {
  
    const{ data, location, fetchWeather , setLocation} = useContext(WeatherContext);

    const [address, setAddress] = useState('');
   
   
 
  return (
    <StyledSearchInput>
             <div>
               <div onClick={() => setSearchPlace('locations')} >
                   <span class="material-symbols-outlined close"> close
                    </span>
                </div>

                     <div className='searchInput__header'>
             
                    <div className='search'>
                        
                        <span class="material-symbols-outlined">
                            search
                        </span>

                        <input type='text' value={location} onChange={(e) => setLocation(e.target.value)}  />

                    </div>
                    <button className='btn' > Search </button>

            </div> 

       <div className='searchInput__chats'>
           <div className='searchInput__div'>
                <div>
                    <p> London</p>
                    <span class="material-symbols-outlined">
                        navigate_next
                        </span>
                    </div>
           </div>
          
          <div className='searchInput__div'>
            <div>
                <p> Barcelona</p>
                <span class="material-symbols-outlined">
                    navigate_next
                    </span>
                </div>
          </div>

            <div className='searchInput__div'>
                <div>
                    <p> Long Beach</p>
                    <span class="material-symbols-outlined">
                        navigate_next
                        </span>
                    </div>
            </div>
       </div>

     </div>
        </StyledSearchInput>
  )
}

export default SearchInput;

{/* <PlacesAutocomplete value={address} onClick={handleClick} onSelect={handleSelect} >

{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
<div>
    {/* <p>Latitude: {coordinates.lat}</p>
    <p>Longitude: {coordinates.lng}</p> */}


    // <div className='search'>
    //     <span class="material-symbols-outlined">
    //         search
    //     </span>

    //     <input {...getInputProps( {placeholder: 'search location' }) }/>

    // </div>
    // <button className='btn'> Search </button>

    // <div>
    //     {loading ? <div>...loading</div> : null }

    //     {suggestions.map(suggestion => {
    //         const style = {
    //             backgroundColor: suggestion.active ? '#fff' : '#1E213A'
    //         };

    //         return(
    //             <div>
    //                 {suggestion.description}
    //             </div>
    //         );
    //     })}
    // </div>
// </div>
// )}
// </PlacesAutocomplete> 