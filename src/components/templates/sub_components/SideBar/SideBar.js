import SidebarItems from './SidebarItems';
import styled from 'styled-components';
import React, { useEffect } from 'react';

import { useNavigate } from 'react-router';
import axios from 'axios';
import { observer } from 'mobx-react';
import Logo from '../../logo/Logo';
// import items from './data.json';

const SidebarContent = styled.div`
    width:min-content;
    flex-shrink: 0;
    background-color: rgba(22, 22, 22, 1);
    height: 100vh;
    overflow: auto;
    background-color: ${(props) => props.theme.bgColor};
`;

const SidebarText = styled.div``;

const SideBar = observer((({ store }) => {

  const navigate = useNavigate();

  const getProjects = () => {
    axios.get('/project/sidenav-options')
      .then((res) => {
        console.log(res);
        const response = res.data.data;
        store.projects = response;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <SidebarContent>
      <Logo onClick={() => { navigate('/dashboard'); }} />
      <SidebarText>
        {store.projects?.map((item, index) => <SidebarItems key={index} item={item} />)}
      </SidebarText>
    </SidebarContent>
  );
}));

export default SideBar;


// projeleri sayfa yüklenirken çekemiyor ve başta false olarak döndüğü için,
// verinin tipi de belli olmadığı için(projects = []; şeklinde store dosyasında tanımlanmamış ) diziyi alamıyor.

// bu yüzden store.projects?.map(...) kullanıyoruz.
// projects'i kontrol ediyoruz. boolean ifade olarak false döner ise yani tanımlanmamış
// bir değer yerine hata dönmektense undefined dönmesini sağlıyoruz 
// undefined olarak döndüğü durumlarda sitede hata almıyoruz 
// projelerin axios ile çekilmesini beklemiş oluyoruz
// çektiği zaman da map fonk. ile dönüyor