import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarTitle = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
    
    span i{
    display: inline-block;
    width: 1.5em;
    margin-left: 2rem;
    }

  .toggle-btn{
    cursor: pointer;
    transition: transform .3s;
  }

`

const SidebarItem = styled.div`
.sidebar{
    width:min-content;
    flex-shrink: 0;
    background-color: rgba(22, 22, 22, 1);
    height: 100vh;
    overflow: auto;
  }
  
  .sidebar-item{
    padding: .75em 1em;
    display: block;
    transition: background-color .15s;
    border-radius: 5px;
    color: white;
    margin-top: .5rem;
  }
  
  .sidebar-item:hover{
    background-color: rgba(255, 255, 255, .1);
  }
  
  .sidebar-title{
    display: flex;
    justify-content: space-between;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
  }
  .sidebar-title span i{
    display: inline-block;
    width: 1.5em;
    margin-left: 2rem;
  }
  .sidebar-title .toggle-btn{
    cursor: pointer;
    transition: transform .3s;
  }
  .sidebar-item.open > .sidebar-title .toggle-btn{
    transform: rotate(180deg);
  }
  .sidebar-content{
    padding-top: .25em;
    height: 0;
    overflow: hidden;
  }
  .sidebar-item.open > .sidebar-content{
    height: auto;
  }
  
  .sidebar-item.plain{
    font-size: 1em;
    color: #fff;
    text-decoration: none;
  }
  .sidebar-item.plain:hover{
    text-decoration: underline;
  }
  .sidebar-item.plain i{
    display: inline-block;
    width: 1.7em;
  }
`

const SidebarItems = ({ item }) => {
    const [open, setOpen] = useState(false)

    if (item.childrens) {
        return (
            <SidebarItem>
                <div className={open ? "sidebar-item open" : "sidebar-item"}>
                    <SidebarTitle onClick={() => setOpen(!open)}>
                        <span>
                            {item.title}
                        </span>
                        < i className="fa-solid fa-chevron-down toggle-btn" style={{ marginLeft: '4px' }} ></i>
                    </SidebarTitle>
                    <div className="sidebar-content">
                        {item.childrens.map((child, index) => <SidebarItems key={index} item={child} />)}
                    </div>
                </div>
            </SidebarItem>
        )
    } else {
        return (
            <Link to={item.path || "#"} className="sidebar-item plain">
                {item.title}
            </Link>
        )
    }
}

export default SidebarItems
