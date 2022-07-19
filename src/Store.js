import { configure, makeAutoObservable } from 'mobx';
import { darkTheme } from './components/UI/Theme';
// eslint-disable-next-line no-unused-vars
// import { lightTheme, darkTheme } from './components/UI/Theme';

configure({
  enforceActions: 'never'
});

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  // theme
  theme = darkTheme;

  // login - register error messages  
  registerInfMessage;
  loginInfMessage;

  // type of information message - determine the message color 
  typeOfMessage;

  // client token
  token = localStorage.getItem('clientToken');
}

const store = new Store;
export default store;
