import { configure, makeAutoObservable } from 'mobx';
import { darkTheme } from './components/UI/Theme';

configure({
  enforceActions: 'never',
});

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  // sidebar check
  sidebarOpen = false;

  // theme
  theme = darkTheme;
  
  // client token
  token = localStorage.getItem('clientToken');
  
  // user projects
  projects;
}

const store = new Store;
export default store;
