
import React from 'react';


function LocationBox ({ weather,currentDate}){
  return(

          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{currentDate()}</div>  
          </div>

  )

}

export default LocationBox;