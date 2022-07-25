import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Submit = styled.input`
    border: none;
    outline: none;
    padding: 10px 30px;
    border-radius: 3px;

    cursor: pointer;
    background-color: white;
`;

export const SubmitOrange = styled.input`
    border: none;
    outline: none;
    padding: 10px 30px;
    border-radius: 3px;
    background-color: #EE8C3A;
    cursor: pointer;
`;

export const NavButton = styled(Link)`
    margin-top: 3rem;
    border: none;
    outline: none;
    padding: 10px 50px;
    border-radius: 3px;
    text-decoration: none;
    color: black;
    
    cursor: pointer;
    background-color: #EE8C3A;
`;

export const NavBtnHeader = styled(NavLink)`
    border: none;
    outline: none;
    border-radius: 3px;
    text-decoration: none;
    color: black;
    vertical-align: top;
    cursor: pointer;
    background-color: white;
    text-align: center;
    margin-right: 1rem;
`;