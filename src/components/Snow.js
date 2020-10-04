
import React from 'react';
import SearchBox from './SearchBox'
import LocationBox from './LocationBox';
import WeatherBox from './WeatherBox';

function Snow ({query, setQuery, weather, search,currentDate}){
  return(

    <div className= "app snow">
    <main >
    
        <SearchBox query={query} setQuery={setQuery} search={search}/>

        {(typeof weather.main != "undefined") ? (
          
        <div className="container">
          <LocationBox weather={weather} currentDate={currentDate}/>
          <WeatherBox weather={weather}/>
        </div>
      
      ) : ('')}
    </main>
  </div>

  )

}

export default Snow;
