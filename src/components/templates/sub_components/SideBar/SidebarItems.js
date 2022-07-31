import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarItem = styled.div`
  .sidebar-item {
    display: block;
    margin: 0.75em .5rem;
    color: white;
  }

  .sidebar-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .sidebar-title {
    padding: 0.75em .5em .75em 0.75em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: max-content;
    font-size: 1em;
    user-select: none;
    cursor: pointer;
    color: ${(props) => props.theme.textColor};
    transition: background-color 0.15s;
    border-radius: 5px;
  }

  .toggle-btn{
    margin-left: 20px;
    cursor: pointer;
    transition: transform .3s;
  }

  .sidebar-title .toggle-btn {
    cursor: pointer;
    transition: transform 0.3s;
  }

  .sidebar-item.open > .sidebar-title .toggle-btn {
    transform: rotate(180deg);
  }

  .sidebar-content {
    padding-top: 0.25em;
    height: 0;
    overflow: hidden;
    display: none;
  }

  .sidebar-item.open > .sidebar-content {
    height: auto;
    display: block;
  }

  .sidebar-item.plain {
    font-size: 1em;
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
    margin-left: .75em;
    width: max-content;
  }
  .sidebar-item.plain:hover {
    text-decoration: underline;
  }
`;

const SidebarItems = ({item}) => {
  const [open, setOpen] = useState(false);

  if (item.subjects) {
    return (
      <SidebarItem>
        <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
          <div className='sidebar-title' onClick={() => setOpen(!open)}>
            <span>
              {item.title}
              <i className="fa-solid fa-chevron-down toggle-btn"></i>
            </span>
          </div>
          <div className="sidebar-content">
            {item.subjects.map((subject, index) => <SidebarItems key={index} item={subject} />)}
          </div>
        </div>
      </SidebarItem>
    );
  } else {
    return (
      <Link to={item.path || '#'} className="sidebar-item plain">
        {item.title} 
      </Link>
    );
  }
};

export default SidebarItems;