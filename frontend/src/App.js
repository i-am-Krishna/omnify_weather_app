import coldBg from './assets/cold.avif';
import Description from './components/Description';
import { getFormatWeatherData } from './weatherService';
import { useEffect, useState } from 'react';


function App() {
const [value,setValue] = useState("Mumbai");
const [weather,setWeather] = useState(null);
useEffect(()=>{
const fetchWeatherData = async()=>{
    const data = await getFormatWeatherData(value);
    setWeather(data)
  }
  fetchWeatherData();
},[value]);

const enterKeyPressed=(e)=>{
    if(e.keyCode === 13){
      setValue(e.currentTarget.value);
      e.currentTarget.blur();
    }
}



  return (
    <div className='app' style={{backgroundImage:`url(${coldBg})`}}>
      <div className="overlay">
        {weather && (

          <div className="container">
          <div className="section section_inputs">
            <input type="text" name="city" placeholder='Enter city...' onKeyDown={enterKeyPressed}/>
            <button>°C</button>
          </div>
          <div className="section section_temperature">
            <div className="icon">
              <h3>{`${weather.name}, ${weather.country}`}</h3>
               
               <img src={weather.iconURL} alt="weatherIcon" />
               
                <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} °C`}</h1>
              </div>
          </div>
          <Description weather={weather}/>
        </div>
            )}
      </div>
      
    </div>
  );
}

export default App;
