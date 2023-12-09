import React from 'react'
import FiveDayForecast from './fiveDayForecast.display'

function WeatherDisplay() {
    return (
        <div className='py-8 px-6 mt-10 border border-gray-950'>
            <h2 className='mb-5'>Weather in City</h2>
            <ul>
                <li className='my-2'>Temp: 65℉</li>
                <li className='my-2'>Wind Speed: 13mph</li>
                <li className='my-2'>Humidity: 13g/kg</li>
            </ul>

            <h3 className='mt-10'>5 Day Forecast</h3>
            <FiveDayForecast />
        </div>
    )
}

export default WeatherDisplay
