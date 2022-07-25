import styled, { css } from 'styled-components';

export const Title = styled.h2`
    color: white;
    user-select: none;

    ${props => props.black && css`
        user-select: none;
        color: black;
    `}
`;