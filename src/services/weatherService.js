import axios from 'axios';

const getWeatherForecast = (location) => {
  return axios.get(`https://api.weather.com/v3/wx/forecast/daily/5day?location=${location}&format=json`);
};

export default {
  getWeatherForecast
};

