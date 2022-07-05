import {configure, makeAutoObservable } from 'mobx';

configure({
  enforceActions: 'never'
});

class Store {
  // login - register error messages  
  registerInfMessage;
  loginInfMessage;
  token;
  constructor(){
    makeAutoObservable(this);
  }
}

const store = new Store;
export default store;
