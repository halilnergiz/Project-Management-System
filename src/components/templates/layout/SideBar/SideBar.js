import SidebarItems from './SidebarItems';
import items from './data.json';
import styled from 'styled-components';
import React from 'react';
import logo from '../../../../assets/logo.png';

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
    height: 120px;
    position: relative;
    top: -2rem;
`;

const SidebarText = styled.div`
  position: relative;
  margin-top: -3rem;
`;


const SideBar = () => {


  return (
    <SidebarContent>
      <Logo src={`${logo}`} />
      <SidebarText>
        {items.map((item, index) => <SidebarItems key={index} item={item} />)}
      </SidebarText>
    </SidebarContent>
  );
};

export default SideBar;
