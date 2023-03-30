import React from 'react'

const Weather = ({ weatherData }) => {

    return (
        <div className='mt-3 p-3'>
            <div className="col-span-3">
                {
                    weatherData.length !== 0
                        ?
                        <>
                            <h2 className='text-4xl text-center text-white '>{weatherData.name}</h2>
                            <div className='text-2xl flex my-2 justify-center'>
                                <div className='text-white'>{weatherData.main.temp} °C </div>
                            </div>
                            <div className='text-2xl text-white  my-2 flex justify-center'>
                                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                            </div>
                            <div className='text-2xl my-2 text-white flex justify-center'>{weatherData.weather[0].main}</div>
                            <div className='text-2xl flex justify-around my-2'>
                                <div className='text-white '>Max: {weatherData.main.temp_max} °C </div>
                                <div className='text-white '>Min: {weatherData.main.temp_min} °C </div>
                            </div>
                        </>
                        :
                        <>
                            <h3 className='text-center p-3 text-xl'>Please enter the city name</h3>
                        </>
                }
            </div>
        </div>

    )
}

export default Weather;