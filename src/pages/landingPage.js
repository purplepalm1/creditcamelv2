
import logo from '../logo.png'
import '../App.css'
import '../index.css'
import React from 'react';


export const LandingPage = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    CreditCamel: Where your Credit Journey <a href='/intake' className='App-link'>Begins.</a>
                </p>
            </header>
        </div>



    );


}