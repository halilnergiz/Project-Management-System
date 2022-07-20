/* eslint-disable linebreak-style */
import axios from 'axios';
import { toast } from 'react-toastify';

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
      toast.loading('Loading Your Datas'),{
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      };
    }
    if(response.status == 201) {
      toast.info(response.statusText),{
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      };
    }
    return response;
  }, (error) => {
    console.log(error);
    if (error.response.status == 401) {
      localStorage.setItem('clientToken', null);
      toast.error(error.response.data.message),{
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      };
    }
    if(error.response.status == 409) {
      toast.error(error.response.data.message),{
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      };
    }
    return Promise.reject(error);
  }
);
