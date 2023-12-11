import React from 'react'
import { useState } from 'react';


export default function Form() {

    const [city, setCity] = useState('')
    const [status, setStatus] = useState('typing')

    function handleInputChange(event) {
        setCity(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setStatus('submitting');
        console.log("clicked!");
        console.log(city);
        setCity('')
        setStatus('typing')
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for='city'>City:</label>

            <input
                name="city"
                type="text"
                placeholder="Philadelphia"
                value={city}
                onChange={handleInputChange} />

            <button
                disabled={city.length === 0 || status === 'submitting'}
                type="submit"

            >Search</button>
        </form>
    )
}