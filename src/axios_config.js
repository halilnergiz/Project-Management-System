/* eslint-disable linebreak-style */
import axios from 'axios';
import { toast } from 'react-toastify';
import { toastProperty } from './components/templates/notification/Notification';

axios.defaults.baseURL = `${process.env.API_URL}`;

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  }, (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    
    const clientToken = response.data.data.token;
    localStorage.setItem('clientToken', clientToken);
    if(response.status == 200) {
      toast.loading('Loading Your Datas'),toastProperty;
    }
    if(response.status == 201) {
      toast.info(response.statusText),toastProperty;
    }
    return response;
  }, (error) => {
    console.log(error);

    if (error.response.status == 401) {
      localStorage.setItem('clientToken', null);
      toast.error(error.response.data.message),toastProperty;
    }
    if(error.response.status == 409) {
      toast.error(error.response.data.message),toastProperty;
    }
    return Promise.reject(error);
  }
);
