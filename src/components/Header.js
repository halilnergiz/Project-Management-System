import React from 'react'
import { ContentHeader,NavBar, Item, Account, linkStyle } from '../style-components/Header';
import { Link } from 'react-router-dom';

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