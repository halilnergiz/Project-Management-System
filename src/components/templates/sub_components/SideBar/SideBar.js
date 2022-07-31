import SidebarItems from './SidebarItems';
// import sidebarDatas from './data.json';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import logo from '../../../../assets/logo.png';
import { useNavigate } from 'react-router';
import axios from 'axios';

const SidebarContent = styled.div`
    width:min-content;
    flex-shrink: 0;
    background-color: rgba(22, 22, 22, 1);
    height: 100%;
    overflow: auto;
    background-color: ${(props) => props.theme.bgColor};
`;

const Logo = styled.img`
    width: 140px;
    height: 40px;
    margin-top: .5rem;
    cursor: pointer;
`;

const SidebarText = styled.div``;

const SideBar = (() => {

  const navigate = useNavigate();
  const [userProjects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/project/sidenav-options')
      .then((res) => {
        const response = res.data.data;
        setProjects(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SidebarContent>
      <Logo src={`${logo}`} onClick={() => { navigate('/dashboard'); }} />
      <SidebarText>
        {userProjects.map((item, index) => <SidebarItems key={index} item={item} />)}
      </SidebarText>
    </SidebarContent>
  );
});

export default SideBar;