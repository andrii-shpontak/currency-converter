import { URLS } from '../../shared/constants';
import axios from 'axios';
import { setupInterceptorsTo } from './interceptors';

const api = setupInterceptorsTo(
  axios.create({
    baseURL: URLS.API_URL,
  }),
);

export default api;
