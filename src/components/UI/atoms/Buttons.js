import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { mainColors } from '../staticStyle/staticStyle';

export const Submit = styled.input`
    border: none;
    outline: none;
    padding: 10px 30px;
    border-radius: 5px;

    cursor: pointer;
    background-color: white;

    ${props => props.orange && css`
    background-color: ${mainColors.orange};
    margin-top: 1rem;
    `}
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
    background-color: ${mainColors.orange};

    ${props => props.header_button && css`
        text-align: center;
        margin-right: 1rem;
        width: 180px;
        padding: 8px 8px 0px 0px;
        margin-top: 0;
    `}
`;
