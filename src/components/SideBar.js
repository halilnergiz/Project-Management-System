import React from 'react'
import {SidebarBtn, LeftSide } from '../style-components/Sidebar';

const SideBar = () => {
  return (
      <LeftSide>
        <SidebarBtn>
          <i className="fa-solid fa-bars fa-xl"></i>
        </SidebarBtn>
        {/* <Logo /> */}
      </LeftSide>
  )
}

export default SideBar
