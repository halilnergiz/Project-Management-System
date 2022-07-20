import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Submit = styled.input`
    border: none;
    outline: none;
    padding: 10px 30px;
    border-radius: 3px;

    cursor: pointer;
    background-color: white;
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