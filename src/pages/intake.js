
import '../App.css'
import '../index.css'
import React from 'react';


import BasicInfo from '../components/intakeform';

export const Intake = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className='centered-heading'>
                    <h1>Welcome to CreditCamel! <br />
                        The revolutionary fintech tool to estimate your credit score.</h1>
                </div>
                <div className='stepper'>
                    <BasicInfo />
                </div>
            </header>
        </div>

    );

}