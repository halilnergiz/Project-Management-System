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
    border-radius: 0px 0px 0px 0px;
    background-color: rgba(22,22,22,1);
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

const linkStyle = {
    color:"white",
    textDecoration: "none"
}

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
                    <Link to={'/projects'} style={linkStyle}>Projects</Link>
                </Item>
                <Item>
                    <Link to={'/responsibility'} style={linkStyle}>Responsiblity</Link>
                </Item>
                <Item>
                    <Link to={'/issues'} style={linkStyle}>Issues</Link>
                </Item>
            </NavBar>
            <Account />

        </ContentHeader>
    )
}

export default Header;