import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ContentHeader = styled.div`
    float: right;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    background-color: ${(props) => props.theme.bgColor};
`

const NavBar = styled.ul`
    padding: 0 20px;
    list-style: none;
    display: flex;
    flex-direction: row;
`

const Item = styled.li`
    margin: 0 10px;
`

const NavLink = styled(Link)`
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
`

const Account = styled.div`
    position: relative;
    width: 35px;
    height: 35px;
    right: 1rem;
    border-radius: 100%;
    background-color: white;
    border: 1px solid black;
`

const Header = () => {
    return (
        <ContentHeader>

            <NavBar>
                <Item>
                    <NavLink to={'/projects'}>Projects</NavLink>
                </Item>
                <Item>
                    <NavLink to={'/responsibility'}>Responsiblity</NavLink>
                </Item>
                <Item>
                    <NavLink to={'/issues'}>Issues</NavLink>
                </Item>
            </NavBar>
            <Account />
    
        </ContentHeader>
    )
}

export default Header;