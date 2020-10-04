

import React, { useState } from 'react';
import Warm from './components/Warm';
import Cold from './components/Cold';
import Snow from './components/Snow';

const api = {
  key: "b0dc03ff4ec245156d89fd756e798247",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});


  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          setQuery('');
          console.log(data);
        });
    }
  }

  const currentDate = () =>{

    const d = new Date();

    let days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let day =days[d.getDate()+2];

    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();


    return `${day} ${date} ${month} ${year}`

  }

  
    if (typeof weather.main != "undefined" && weather.main.temp > 15) {

      return <Warm query={query} weather={weather} setQuery={setQuery} currentDate={currentDate} search={search}/>


    } if (typeof weather.main != "undefined" && weather.main.temp < 15 && weather.main.temp >0){

      return <Cold query={query} weather={weather} setQuery={setQuery} currentDate={currentDate} search={search}/>
 

    } if (typeof weather.main != "undefined" && weather.main.temp <= 0){

      return <Snow query={query} weather={weather} setQuery={setQuery} currentDate={currentDate} search={search}/>

       

    } else{
      return(

        <div className= "app">
        <main >
        
            <div className="search-box">
              <input 
                type="text"
                className="search-bar"
                placeholder="Search place..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
              />
            </div>
  
            {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
                <div className="location">{weather.name}, {weather.sys.country}</div>
                <div className="date">{currentDate()}</div>
                
              </div>
              <div className="weather-box">
                <div className="temp">
                  {Math.round(weather.main.temp)}°c
                </div>
                <div className="weather">{weather.weather[0].main}</div>
              </div>
            </div>
          
          ) : ('')}
        </main>
      </div>

      );
    }

    
   
  
}

export default App;
