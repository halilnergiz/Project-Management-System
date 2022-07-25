import axios from 'axios';
import { toast } from 'react-toastify';
import { toastProperty } from './components/templates/notification/Notification';

axios.defaults.baseURL = `${process.env.API_URL}`;

let toastId;

axios.interceptors.request.use(
  (request) => {
    toastId = toast.loading('Loading...');
    request.headers = {
      'Authorization' : `Bearer ${localStorage.getItem('clientToken')}`,
      'Content-Type': 'application/json',
    };
    return request;
  }, (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    toast.dismiss(toastId);
    const clientToken = response.data.data.token;
    localStorage.setItem('clientToken', clientToken);
    if(response.status == 200) {
      toast.success('Successful Login', toastProperty);
    }
    if(response.status == 201) {
      toast.success(response.statusText, toastProperty);
    }
    console.log('proje eklendi 1');
    return response;
  }, (error) => {
    toast.dismiss(toastId);
    if (error.response.status == 401) {
      localStorage.setItem('clientToken', null);
      toast.error(error.response.data.message, toastProperty);
    }
    if(error.response.status == 409) {
      toast.error(error.response.data.message,toastProperty);
    }
    return Promise.reject(error);
  }
);