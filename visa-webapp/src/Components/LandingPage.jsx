import React, { useState, useEffect } from 'react';
import BasicExample from './Navbar';
import CalendarApp from './Calendar';

export default function WelcomeMessage(){
    //const [greeting, setGreeting] = useState('');


    /*useEffect(() => {
        fetch("https://localhost:7091/LandingPage")
        .then(response => response.text())
        .then(data => {
            setGreeting(data)
          })
    }, []);*/


    return (
      <div>
        <div><BasicExample/></div>        
        <h1>Greeting{/* {greeting} */}</h1>
        <div><CalendarApp/></div>
      </div>
    );  
}