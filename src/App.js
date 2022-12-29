import React, { useState } from 'react'
import "./App.css";
import axios from 'axios';

function App() {
const [data, setData]=useState({});
const [location, setLocation]=useState("");


  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=6e63eb7aa6ddbe20ba69172ae563353b&units=metric`;
    
  const searchLocation = (e) => {
if(e.key === 'Enter'){
  axios.get(url).then(res=>{
    
    setData(res.data);
    console.log(res.data);
  })
}
  }
 
  return (
    <div className='app'>
      <div className='search'>
            <input type='text' 
            placeholder='Enter Location'
            value={location}
            onChange={e => setLocation(e.target.value)}
            onKeyPress={searchLocation}
            />
      </div>
     <div className='container'>
      <div className='top'>
        <div className='Location'>
          <p>{data.name}</p>
          {data.sys ? <p>{data.sys.country}</p> : null}
        </div>
        <div className='temp'>
           {data.main ? <h1>{data.main.temp.toFixed()}&deg;C</h1> : null}
        </div>
      <div className='icon'>
           <img className='city-icon' src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].description}/>
           
    
      </div>
      
        <div className='desc'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        <div className='bottom'>
          <div className='feels'>
           {data.main ? <p>{data.main.feels_like.toFixed()}&deg;C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
          {data.wind ? <p>{data.wind.speed}MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
     </div>
     
    </div>
  )
}

export default App
