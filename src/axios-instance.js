import axios from 'axios';
import { proxy } from './config';

const axiosInstance = axios.create({
  baseURL: `${proxy}https://api.nal.usda.gov/ndb/`
});

export default axiosInstance;