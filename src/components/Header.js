import React from 'react'
import { ContentHeader, SidebarBtn, Logo, NavBar, Item, Account, LeftSide } from '../style-components/Header';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <ContentHeader>
            
            <LeftSide>
                <SidebarBtn>

                </SidebarBtn>
                <Logo />
            </LeftSide>

            <NavBar>
                <Item>
                    <Link to={'/projects'}>Projects</Link>
                </Item>
                <Item>
                    <Link to={'/responsibility'}>Responsiblity</Link>
                </Item>
                <Item>
                    <Link to={'/issues'}>Issues</Link>
                </Item>
            </NavBar>
            <Account />

        </ContentHeader>
    )
}

export default Header;