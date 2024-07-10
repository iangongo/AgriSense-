import axios from 'axios';

const analyzeSoil = (soilSample) => {
  return axios.post('https://api.soil.com/analyze', soilSample);
};

export default {
  analyzeSoil
};

