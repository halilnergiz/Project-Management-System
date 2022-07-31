import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { darkTheme, lightTheme } from '../../UI/Theme';
import {observer} from 'mobx-react';
import { NavButton } from '../../UI/atoms/Buttons';

const ContentHeader = styled.div`
    float: right;
    width: 100%;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #161616;
    background-color: ${(props) => props.theme.bgColor};
    padding: .2rem;
`;

const NavBar = styled.ul`
  padding: 0 20px;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const Logout = styled(Link)`
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
  margin-right: 1%;
  padding: 7px 10px;
  background-color:${(props)=>props.theme.bgColor};
  border: 1px solid #1B2430;
  border-radius: 3px;
  font-weight: 400;
  letter-spacing: 1px;
  user-select: none;
  font-family: Helvetica ;
  font-weight: 700;
`;

const ChangeTheme = styled.button`
cursor: pointer;
background-color: transparent;
border: none;
color: white;
transform: rotate(10deg);
`;

const ChangeIcon = styled(DarkModeIcon)`
  font-size: 50px;
  color: ${(props) => props.theme.iconColor};
`;

const HeaderTools = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 2%;
`;

const Header = observer(({ store })  => {
  const navigate = useNavigate();
  return (
    <ContentHeader>

      <NavBar />

      <HeaderTools>

        <NavButton to={'create_new_project'} header_button="true"> Create Project </NavButton >

        <NavButton to={'create_new_subject'} header_button="true"> Create Subject </NavButton >

        <ChangeTheme type={'checkbox'} onClick={() => {
          JSON.stringify(store.theme) == JSON.stringify(darkTheme) ? store.theme = lightTheme : store.theme = darkTheme;
        }}>
          <ChangeIcon />
        </ChangeTheme>

        <Logout to={'/'} onClick={
          () => {
            navigate('/');
            setTimeout(() => {
              localStorage.setItem('clientToken', null);
            }, 10);
          }}>
          Logout
        </Logout>

      </HeaderTools>

    </ContentHeader>
  );
});

export default Header;
