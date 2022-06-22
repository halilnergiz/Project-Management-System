import React from 'react';
import { LeftSide, Logo, SidebarBtn } from '../../style-components/Sidebar';
import SidebarItems from './SidebarItems';
import items from './data.json';


const SideBar = () => {
  return (
    <div className='sidebar'>
      {items.map((item, index) => <SidebarItems key={index} item={item} />)}
    </div>
  )
}

export default SideBar


