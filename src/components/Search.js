import React, { useState } from 'react'
import Weather from './Weather';
import axios from 'axios';

const Search = () => {
 
    const [search, setSearch]= useState("");
    const [weather, setWeather] = useState([]);

    const getWeatherData =()=>{
      if (search !== "") {
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=547c3ae371f8344197aafe80f1bb3fdd&units=metric`
        )
          .then(
             (response) => {
               console.log(response.data.dt);
              setWeather(response.data);
            }
          ).catch(
            (error) => {
              console.log(error);
            }
          )
      }
    }
    const changeInputHandler=(e)=>{
     setSearch(e.target.value)   
     }
    
  return (
   <>
    <div className=' flex justify-center'>
        <input  value={search} onChange= {changeInputHandler}type='search' placeholder='Enter the city name' className='border border-slate-500 p-2 my-3'/>
        <button className='bg-cyan-500 text-white my-3 p-2 hover:scale-105 rounded' onClick={getWeatherData}>Search</button>
    </div>
    <Weather weatherData={weather}/>
    </>
  )
}

export default Search;