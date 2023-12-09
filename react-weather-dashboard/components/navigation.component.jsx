import React from 'react';

function Navigation() {
    return (
        <header className='flex justify-between items-center py-5 px-3'>
            <h3>Weather App</h3>
            <nav>
                <ul className='flex'>
                    <li className='mx-3'>Option</li>
                    <li className='mx-3'>Option</li>
                    <li className='ml-3'>Option</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
