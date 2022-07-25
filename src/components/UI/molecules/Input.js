import styled, { css } from 'styled-components';

export const TextLabel = styled.label`
    color:white;
    display: inline-block;
    margin-bottom: 10px;
    font-size: 14px;
    user-select: none;

    ${props => props.createForm && css`
        color: black;
    `}
`;

export const TextInput = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 3px;
    height: 25px;
    ${props => props.createForm && css`
        border-bottom: 2px solid black;
        padding: 0px 0px 0px 10px;
    `}
`;

export const ErrorMessage = styled.p`
    color: white;
    text-transform: lowercase;
    font-size: 12px;
    color: #f24547;
`;
