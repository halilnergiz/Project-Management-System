/* eslint-disable linebreak-style */
import axios from 'axios';

function interceptors() {

  const API_URL = process.env.API_URL;
  axios.defaults.baseURL = `${API_URL}`;

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
      console.log(response);
      
      return response;
    }, (error) => {
      console.log(error);
      if (error.response.status == 401) {
        localStorage.setItem('clientToken', null);
      }
      if(error.response.status == 409) {
        window.alert('Bu email kullanılıyor. Giriş yapmak için Login sayfasına gidin');
      }
      return Promise.reject(error);
    }
  );
}

export default interceptors;