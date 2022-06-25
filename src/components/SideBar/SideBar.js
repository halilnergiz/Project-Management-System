import SidebarItems from './SidebarItems';
import items from './data.json';
import styled from 'styled-components'
import React from 'react'

const SidebarContent = styled.div`
    width:min-content;
    flex-shrink: 0;
    background-color: rgba(22, 22, 22, 1);
    height: 100vh;
    overflow: auto;
    background-color: ${(props) => props.theme.bgColor};
`

const SideBar = () => {


  return (
      <SidebarContent>
        {items.map((item, index) => <SidebarItems key={index} item={item} />)}
      </SidebarContent>
  )
}

export default SideBar


