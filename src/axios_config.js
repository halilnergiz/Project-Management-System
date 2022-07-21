/* eslint-disable linebreak-style */
import axios from 'axios';
import { toast } from 'react-toastify';
import { toastProperty } from './components/templates/notification/Notification';

axios.defaults.baseURL = `${process.env.API_URL}`;

let toastId;

axios.interceptors.request.use(
  (request) => {
    toastId = toast.loading('Loading...');
    console.log(request);
  }, 
);

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    toast.dismiss(toastId);
    const clientToken = response.data.data.token;
    localStorage.setItem('clientToken', clientToken);
    if(response.status == 200) {
      toast.success('Successful Login', toastProperty);
    }
    if(response.status == 201) {
      toast.success(response.statusText, toastProperty);
    }
    return response;
  }, (error) => {
    console.log(error);
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


// toast.promise(Authenticaton,  {
//   pending: 'pending',
//   success: 'promise is loaded',
//   error: 'error'
// });