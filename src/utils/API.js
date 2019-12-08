import axios from 'axios';

const openWeatherKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export default {
    getWeather: function(zip) {
        //returning a promised object
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&APPID=${openWeatherKey}`)
    }
}