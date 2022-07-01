/* eslint-disable linebreak-style */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
`;

export const TextInput = styled.input`
border: none;
outline: none;
padding: 10px;
border-radius: 3px;
`;

export const ErrorMessage = styled.p`
color: white;
`;

export const Submit = styled.input`
    /* margin-top: 2rem; */
    border: none;
    outline: none;
    padding: 10px 30px;
    border-radius: 3px;

    cursor: pointer;
    background-color: #EE8C3A;
`;

export const NavButton = styled(Link)`
    border: none;
    outline: none;
    padding: 10px 50px;
    border-radius: 3px;
    text-decoration: none;
    color: black;

    cursor: pointer;
    background-color: #EE8C3A;
    
`;

export const Title = styled.h2`
color: white;
`;