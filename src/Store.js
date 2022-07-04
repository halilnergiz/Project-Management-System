import {configure, makeAutoObservable } from 'mobx';

configure({
  enforceActions: 'never'
});

class Store {
  registerInfMessage;
  loginInfMessage;
  
  constructor(){
    makeAutoObservable(this);
  }
}

const store = new Store;
export default store;
