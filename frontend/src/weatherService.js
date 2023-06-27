import axios from 'axios';
const makeIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;
const getFormatWeatherData = async (city) => {
    const {data} = await axios.get(`http://localhost:8000/?city=${city}`)

    const {weather , main: {temp,feels_like, temp_min,temp_max, pressure,humidity}, wind:{speed}, sys:{country},name} = data.weather;

    const {description,icon} = weather[0];
    
    return {weather,temp,feels_like,temp_min,temp_max,pressure,humidity,speed,country,name,description,iconURL: makeIconURL(icon)};
}

export {getFormatWeatherData};